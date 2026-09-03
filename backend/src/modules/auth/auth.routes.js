import { Router } from "express";
import { getCurrentUser, Login, RegisterUser, testOwner } from "./auth.controllers.js";
import { loginValidator, registerValidator } from "../../validators/auth.validator.js";
import { validateRequest } from "../../middleware/validator.middleware.js";
import { authenticateToken } from "../../middleware/auth.middleware.js";
import { authorizeRoles } from "../../middleware/role.middleware.js";

const authRoutes = Router()
authRoutes.post('/login',loginValidator,validateRequest, Login)
authRoutes.post('/registerUser', registerValidator, validateRequest,  RegisterUser)
authRoutes.get('/me', authenticateToken, getCurrentUser)
authRoutes.get('/ownerTest', authenticateToken,authorizeRoles("propertyOwner", "admin", "tenant"), testOwner)
export default authRoutes;