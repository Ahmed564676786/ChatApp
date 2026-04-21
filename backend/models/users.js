const users = [
  {
    id: "1",
    name: "Ahmed",
    socketId: "abc123",
    isOnline: true
  },
  {
    id: "2",
    name: "Ali",
    socketId: "xyz789",
    isOnline: true
  }
];


// Add user
export const addUser = (user) => {
  users.push(user);
};

// Get user by ID
export const getUserById = (id) => {
  return users.find(u => u.id === id);
};

// Remove user
export const removeUserBySocketId = (socketId) => {
  const index = users.findIndex(u => u.socketId === socketId);  // -1 not found
  if (index !== -1) {
    return users.splice(index, 1);
  }
};

export const removeUserByUserId = (userId) => {
  const index = users.findIndex(user => user.id === userId);
  if (index === -1) return null; // user not found
  const removedUser = users[index];
  users = users.filter(user => user.id !== userId);
  return removedUser;
};