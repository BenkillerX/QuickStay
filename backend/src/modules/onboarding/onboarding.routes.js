import { Router } from "express";
import { completePropertyOwnerOnboarding, completeServiceProviderOnboarding, completeTenantOnboarding } from "./onboarding.controllers.js";
import { authenticateToken } from "../../middleware/auth.middleware.js";

const onboardingRoutes = Router();
onboardingRoutes.post('/tenant', authenticateToken, completeTenantOnboarding)
onboardingRoutes.post('/service-provider', authenticateToken, completeServiceProviderOnboarding)
onboardingRoutes.post('/property-owner', authenticateToken, completePropertyOwnerOnboarding)
export default onboardingRoutes;