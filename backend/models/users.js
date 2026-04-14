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
export const getUser = (id) => {
  return users.find(u => u.id === id);
};

// Remove user
export const removeUser = (socketId) => {
  const index = users.findIndex(u => u.socketId === socketId);
  if (index !== -1) {
    return users.splice(index, 1);
  }
};