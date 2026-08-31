import jwt from "jsonwebtoken";

export function generateToken(user) {
    const payload = {
        id: user.user_id,
        email:user.email,
        firstname:user.firstname,
        role:user.role
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"7d"})
    return token;
}