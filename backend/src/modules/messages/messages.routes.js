import { Router } from "express";
import { createConversation, getConversationMessages, getConversations, markMessageAsRead, sendMessage } from "./messages.controller.js";
import { authenticateToken } from "../../middleware/auth.middleware.js";

const messagesRoutes = Router()

messagesRoutes.post(
  "/",
  authenticateToken,
  createConversation
);

messagesRoutes.get(
  "/",
  authenticateToken,
  getConversations
);

messagesRoutes.get(
  "/:conversationId",
  authenticateToken,
  getConversationMessages
);

messagesRoutes.post(
  "/:conversationId",
  authenticateToken,
  sendMessage
);

messagesRoutes.patch(
  "/:messageId/read",
  authenticateToken,
  markMessageAsRead
);

app.use("/api/messages/conversations", messagesRoutes);

export default messagesRoutes;