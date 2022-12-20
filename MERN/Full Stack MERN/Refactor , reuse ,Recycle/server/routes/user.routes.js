const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.get('/api', UserController.index);
  app.post('/api/people', UserController.createNewUser);
  app.get("/api/users/", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUser);
  app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);

};