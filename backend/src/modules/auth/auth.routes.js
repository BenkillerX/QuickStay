import { Router } from "express";
import { Login, RegisterPropertyOwner,  RegisterServiceProvider,  RegisterUser } from "./auth.controllers.js";
import { registerValidator } from "../../validators/auth.validator.js";
import { validateRequest } from "../../middleware/validator.middleware.js";

const authRoutes = Router()
authRoutes.post('/login', Login)
authRoutes.post('/registerUser', registerValidator, validateRequest,  RegisterUser)
authRoutes.post('/registerPropertyOwner', RegisterPropertyOwner)
authRoutes.post('/registerSkillOwner', RegisterServiceProvider)
export default authRoutes;