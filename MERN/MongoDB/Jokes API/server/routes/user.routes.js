const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/jokes/", UserController.findAllUsers);
  app.get("/api/jokes/:id", UserController.findOneSingleUser);
  app.put("/api/jokes/update/:id", UserController.updateExistingUser);
  app.post("/api/jokes/new", UserController.createNewUser);
  app.delete("/api/jokes/delete/:id", UserController.deleteAnExistingUser);
};