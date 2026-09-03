import jwt from "jsonwebtoken";

export function generateToken(user) {
    const payload = {
        id: user._id,
        email:user.email,
        firstname:user.firstname,
        role:user.role
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"15m"})
    return token;
}

export function generateRefreshToken(user) {
    return jwt.sign(
        {
            id:user._id
        }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        }
    )
}