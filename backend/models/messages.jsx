// models/messageModel.js

// In-memory storage
const messages = [];

// ==============================
// 📥 ADD MESSAGE
// ==============================
export const addMessage = ({ senderId, receiverId, text, image = "" }) => {
  const newMessage = {
    id: Date.now().toString(),
    senderId,
    receiverId,
    text,
    image,
    seen: false,
    createdAt: new Date()
  };

  messages.push(newMessage);
  return newMessage;
};

// ==============================
// 📄 GET ALL MESSAGES
// ==============================
export const getAllMessages = () => {
  return messages;
};

// ==============================
// 💬 GET CHAT BETWEEN 2 USERS
// ==============================
export const getChat = (user1, user2) => {
  return messages.filter(
    m =>
      (m.senderId === user1 && m.receiverId === user2) ||
      (m.senderId === user2 && m.receiverId === user1)
  );
};

// ==============================
// 📥 GET ALL MESSAGES OF A USER
// ==============================
export const getUserMessages = (userId) => {
  return messages.filter(
    m => m.senderId === userId || m.receiverId === userId
  );
};

// ==============================
// 🧑‍🤝‍🧑 GET CONVERSATION LIST
// ==============================
export const getConversations = (userId) => {
  const chats = getUserMessages(userId);

  const usersSet = new Set();

  chats.forEach(m => {
    if (m.senderId !== userId) usersSet.add(m.senderId);
    if (m.receiverId !== userId) usersSet.add(m.receiverId);
  });

  return [...usersSet];
};

// ==============================
// 👁️ MARK MESSAGES AS SEEN
// ==============================
export const markAsSeen = (senderId, receiverId) => {
  messages.forEach(m => {
    if (m.senderId === senderId && m.receiverId === receiverId) {
      m.seen = true;
    }
  });
};

// ==============================
// ❌ DELETE MESSAGE
// ==============================
export const deleteMessage = (messageId) => {
  const index = messages.findIndex(m => m.id === messageId);

  if (index !== -1) {
    return messages.splice(index, 1)[0];
  }

  return null;
};

// ==============================
// ✏️ EDIT MESSAGE
// ==============================
export const editMessage = (messageId, newText) => {
  const message = messages.find(m => m.id === messageId);

  if (message) {
    message.text = newText;
    return message;
  }

  return null;
};

// ==============================
// 🔍 SEARCH MESSAGES
// ==============================
export const searchMessages = (userId, keyword) => {
  return getUserMessages(userId).filter(m =>
    m.text.toLowerCase().includes(keyword.toLowerCase())
  );
};