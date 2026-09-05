import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDb } from "./src/config/db.js";
import authRoutes from "./src/modules/auth/auth.routes.js";
import onboardingRoutes from "./src/modules/onboarding/onboarding.routes.js";
dotenv.config()


const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoutes)
app.use('/api/onboarding', onboardingRoutes)
app.get('/', (_, res)=>{
    return res.json({
        message:"Hello World and first live deployed backend and live"
    })
})

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Running on ${PORT}`);        
    })
})