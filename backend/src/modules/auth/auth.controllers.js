import { generateRefreshToken, generateToken } from "../../utils/generateToken.js";
import Session from "../models/Session.js";
import User from "../models/Users.js";
import bcrypt from "bcrypt"


export async function RegisterUser(req, res) {
    try {
        const {firstname, lastname, email, password} = req.body;
    const exisitngEmail = await User.findOne({email})

    if (exisitngEmail) {
        return res.status(400).json({
            message:"Email already in Use"
        })
    }
    const saltRounds = 12;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        firstname,
        lastname,
        email,
        password:hashPassword,
        role: "tenant"
    })
    
    await newUser.save();
    return res.status(201).json({
        message:"User Created Successfully",
        token:generateToken(newUser)
    })
    } catch (error) {
        return res.status(500).json({
            message:"An error occured on the server"
        })
    }

}
export async function Login(req, res) {
    try {
        
    const {email, password} = req.body;
    const existingUser = await User.findOne({email})

    if (!existingUser) {
        return res.status(400).json({
            message:"User not found. Create acccount first."
        })
    }

    const isMatch = await bcrypt.compare(password, existingUser.password)

    if (!isMatch) {
        return res.status(400).json({
            message:"Invalid Password"
        })
    }

    return res.status(201).json({
        message:"Login Successful",
        token:generateToken(existingUser),
        accessToken:generateRefreshToken(existingUser)
    })

    } catch (error) {
        return res.status(500).json({
            message:"Internal server Error"
        })
    }
}

export async function getCurrentUser(req, res) {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message:"User Not Found"
            })
        }

        return res.status(200).json({
            user
        })
    } catch (error) {
        return res.status(500).json({
            message:"An error Occured On the server"
        })
    }
}

export const updateCurrentUser = async (req, res) => {
    try {
        const { firstname, lastname, email } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Update only fields that were provided
        if (firstname !== undefined) {
            user.firstname = firstname.trim();
        }

        if (lastname !== undefined) {
            user.lastname = lastname.trim();
        }

        if (email !== undefined) {
            const existingEmail = await User.findOne({
                email: email.toLowerCase(),
                _id: { $ne: req.user.id }
            });

            if (existingEmail) {
                return res.status(400).json({
                    message: "Email already in use"
                });
            }

            user.email = email.toLowerCase().trim();
        }

        await user.save();

        return res.status(200).json({
            message: "Profile updated successfully",
            user: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
                isEmailVerified: user.isEmailVerified,
                onboardingCompleted: user.onboardingCompleted
            }
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "An error occurred on the server"
        });
    }
};
