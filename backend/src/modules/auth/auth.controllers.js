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
    
    const refreshToken = generateRefreshToken(existingUser);
    const refreshTokenHash = await bcrypt.hash(refreshToken, 12);
    const expiresAt = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
);
    await Session.create({
    user: user._id,
    refreshTokenHash,
    expiresAt:expiresAt
});


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
export function testOwner(req, res) {
    return res.status(200).json({
        message:"You were an admin or property owner"
    })
}