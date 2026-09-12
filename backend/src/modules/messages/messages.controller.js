import Conversation from "../models/Conversation.js";
import Message from "../models/Messages.js";

// CREATE CONVERSATION
export async function createConversation(req, res) {
  try {
    const userId = req.user.id;

    const { participantId, propertyId, contextType } = req.body;

    if (!participantId) {
      return res.status(400).json({
        success: false,
        message: "Participant is required",
      });
    }

    // Check if conversation already exists
    let conversation = await Conversation.findOne({
      participants: { $all: [userId, participantId] },
      property: propertyId || null,
    });

    // If conversation already exists
    if (conversation) {
      return res.status(200).json({
        success: true,
        conversation,
      });
    }

    // Create new conversation
    conversation = await Conversation.create({
      participants: [userId, participantId],
      property: propertyId || null,
      contextType: contextType || "general",
    });

    return res.status(201).json({
      success: true,
      conversation,
    });
  } catch (error) {
    console.error("Create conversation error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create conversation",
    });
  }
}


// GET USER CONVERSATIONS
export async function getConversations(req, res) {
  try {
    const userId = req.user.id;

    const conversations = await Conversation.find({
      participants: userId,
    })
      .populate(
        "participants",
        "firstname lastname email role"
      )
      .populate(
        "property",
        "title images price location"
      )
      .sort({ lastMessageAt: -1 });

    return res.status(200).json({
      success: true,
      count: conversations.length,
      conversations,
    });
  } catch (error) {
    console.error("Get conversations error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get conversations",
    });
  }
}


// GET MESSAGES IN A CONVERSATION
export async function getConversationMessages(req, res) {
  try {
    const userId = req.user.id;
    const { conversationId } = req.params;

    // Make sure the user belongs to this conversation
    const conversation = await Conversation.findOne({
      _id: conversationId,
      participants: userId,
    });

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      });
    }

    const messages = await Message.find({
      conversation: conversationId,
    })
      .populate(
        "sender",
        "firstname lastname"
      )
      .populate(
        "receiver",
        "firstname lastname"
      )
      .sort({ createdAt: 1 });

    return res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error("Get conversation messages error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get conversation messages",
    });
  }
}


// SEND MESSAGE
export async function sendMessage(req, res) {
  try {
    const userId = req.user.id;
    const { conversationId } = req.params;
    const { content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message cannot be empty",
      });
    }

    // Find conversation and make sure user belongs to it
    const conversation = await Conversation.findOne({
      _id: conversationId,
      participants: userId,
    });

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      });
    }

    // Find the other participant
    const receiverId = conversation.participants.find(
      (participant) => participant.toString() !== userId
    );

    if (!receiverId) {
      return res.status(400).json({
        success: false,
        message: "Receiver not found",
      });
    }

    // Create message
    const newMessage = await Message.create({
      conversation: conversationId,
      sender: userId,
      receiver: receiverId,
      content: content.trim(),
    });

    // Update conversation
    conversation.lastMessage = content.trim();
    conversation.lastMessageAt = new Date();

    await conversation.save();

    const populatedMessage = await Message.findById(
      newMessage._id
    )
      .populate("sender", "firstname lastname")
      .populate("receiver", "firstname lastname");

    return res.status(201).json({
      success: true,
      message: populatedMessage,
    });
  } catch (error) {
    console.error("Send message error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
}


// MARK MESSAGE AS READ
export async function markMessageAsRead(req, res) {
  try {
    const userId = req.user.id;
    const { conversationId } = req.params;
    const { messageId } = req.body;

    if (!messageId) {
      return res.status(400).json({
        success: false,
        message: "Message ID is required",
      });
    }

    // Make sure user belongs to conversation
    const conversation = await Conversation.findOne({
      _id: conversationId,
      participants: userId,
    });

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      });
    }

    // Only the receiver should mark a message as read
    const message = await Message.findOne({
      _id: messageId,
      conversation: conversationId,
      receiver: userId,
    });

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    message.isRead = true;

    await message.save();

    return res.status(200).json({
      success: true,
      message: "Message marked as read",
    });
  } catch (error) {
    console.error("Mark message as read error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to mark message as read",
    });
  }
}