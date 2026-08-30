import { Router } from "express";
import { Login, RegisterPropertyOwner,  RegisterServiceProvider,  RegisterUser } from "./auth.controllers.js";

const authRoutes = Router()
authRoutes.post('/login', Login)
authRoutes.post('/registerUser', RegisterUser)
authRoutes.post('/registerPropertyOwner', RegisterPropertyOwner)
authRoutes.post('/registerSkillOwner', RegisterServiceProvider)
export default authRoutes;