import { generateRefreshToken, generateToken } from "../../utils/generateToken.js";
import Session from "../models/Session.js";
import User from "../models/Users.js";
import bcrypt from "bcrypt"
import { sendVerificationEmail } from "../../services/emailService.js";
import { generateVerificationCode, hashVerificationCode } from "../../utils/emailVerification.js";



export async function registerTenant(req, res) {
    try {
        const {
            firstname,
            lastname,
            email,
            password
        } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "An account with this email already exists."
            });
        }

        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const verificationCode = generateVerificationCode();

const hashedVerificationCode = hashVerificationCode(verificationCode);

const verificationExpires = new Date(
    Date.now() + 10 * 60 * 1000
);
        const newTenant = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    role: "tenant",

    isEmailVerified: false,
    emailVerificationCode: hashedVerificationCode,
    emailVerificationExpires: verificationExpires
});

       await newTenant.save();

try {
    await sendVerificationEmail(
        newTenant.email,
        verificationCode
    );
} catch (emailError) {
    console.error("Verification email error:", emailError);

    await User.findByIdAndDelete(newTenant._id);

    return res.status(500).json({
        message: "Account could not be created because the verification email could not be sent."
    });
}
        return res.status(201).json({
    message: "Account created. Please verify your email.",
    email: newTenant.email
});

    } catch (error) {
        console.error("Tenant registration error:", error);

        return res.status(500).json({
            message: "An error occurred while creating your account."
        });
    }
}

export async function registerPropertyOwner(req, res) {
    try {
        const {
            firstname,
            lastname,
            email,
            password
        } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "An account with this email already exists."
            });
        }

        // Hash password
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create property owner
        const newPropertyOwner = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            role: "propertyOwner"
        });

        await newPropertyOwner.save();

        return res.status(201).json({
            message: "Property owner account created successfully.",
            token: generateToken(newPropertyOwner),
        user: {
        id: newPropertyOwner._id,
        firstname: newPropertyOwner.firstname,
        lastname: newPropertyOwner.lastname,
        email: newPropertyOwner.email,
        role: newPropertyOwner.role
    }
        });

    } catch (error) {
        console.error("Property owner registration error:", error);

        return res.status(500).json({
            message: "An error occurred while creating your account."
        });
    }
}

export async function registerServiceProvider(req, res) {
    try {
        const {
            firstname,
            lastname,
            email,
            password
        } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "An account with this email already exists."
            });
        }

        // Hash password
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create service provider
        const newServiceProvider = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            role: "serviceProvider"
        });

        await newServiceProvider.save();

        return res.status(201).json({
            message: "Service provider account created successfully.",
            token: generateToken(newServiceProvider)
        });

    } catch (error) {
        console.error("Service provider registration error:", error);

        return res.status(500).json({
            message: "An error occurred while creating your account."
        });
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

    return res.status(200).json({
        message:"Login Successful",
        token:generateToken(existingUser)
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

export const emailValidation = async (req, res) => {
    try {
        const { email, code } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        if (user.isEmailVerified) {
            return res.status(400).json({
                message: "Email is already verified."
            });
        }

        if (
            !user.emailVerificationExpires ||
            user.emailVerificationExpires < new Date()
        ) {
            return res.status(400).json({
                message: "Verification code has expired."
            });
        }

        const hashedCode = hashVerificationCode(code);

        if (hashedCode !== user.emailVerificationCode) {
            return res.status(400).json({
                message: "Invalid verification code."
            });
        }

        // Verification successful
        user.isEmailVerified = true;
        user.emailVerificationCode = undefined;
        user.emailVerificationExpires = undefined;

        await user.save();

        return res.status(200).json({
            message: "Email verified successfully.",
            token: generateToken(user),
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
        console.error("Email verification error:", error);

        return res.status(500).json({
            message: "An error occurred while verifying your email."
        });
    }
};