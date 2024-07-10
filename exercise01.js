const mockDatabase = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];

function getUserById(id, callback) {
  setTimeout(() => {
    const user = mockDatabase.find((user) => user.id === id);
    if (user) {
      callback(null, user);
    } else {
      callback(new Error("User not found"), null);
    }
  }, 2000);
}

function processUserData(user, callback) {
  setTimeout(() => {
    user.name = user.name.toUpperCase();
    callback(null, user);
  }, 1500);
}

function executeAndProcess(userId) {
  getUserById(userId, (err, user) => {
    if (err) {
      console.error(err.message);
      return;
    }
    processUserData(user, (err, processedUser) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log("Processed User:", processedUser);
    });
  });
}

executeAndProcess(1);
