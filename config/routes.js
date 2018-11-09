const users = require("../controllers/users.js");
const todos = require("../controllers/todos.js");

module.exports = function(app) {
  // USERS
  app.get("/api/users", users.index);
  app.get("/api/users/:id", users.show);
  app.post("/api/users", users.create);
  app.post("/api/users/:id", users.update);
  app.post("/api/users/delete/:id", users.delete);

  // TODOS
  app.get("/api/todos", todos.index);
  app.get("/api/todos/:id", todos.show);
  app.post("/api/todos", todos.create);
  app.post("/api/todos/:id", todos.update);
  app.post("/api/todos/delete/:id", todos.delete);
};
