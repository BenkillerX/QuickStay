import { generateToken } from "../../utils/generateToken.js";
import User from "../models/Users.js";
import bcrypt from "bcrypt"

export function Login(req, res) {
    
}
export async function RegisterUser(req, res) {
    try {
        const {firstname, lastname, email, password, role} = req.body;
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
        role
    })
    
    await newUser.save();
    return res.status(201).json({
        message:"User Created Successfully",
        user:{
            id:newUser._id,
            username:newUser.firstname,
            email:newUser.email
        },
        token:generateToken(newUser)
    })
    } catch (error) {
        return res.status(500).json({
            message:"An error occured on the server"
        })
    }

}
export function RegisterPropertyOwner() {
    
}
export function RegisterServiceProvider() {
    
}
