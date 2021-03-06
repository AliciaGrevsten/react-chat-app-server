const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim();
  room = room.trim().toLowerCase();

  const user = { id, name, room };

  users.push(user);
  console.log("User added..");

  return { user, error: null };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
