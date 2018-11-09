const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex("users")
      .then(results => {
        res.json(results);
      })
      .catch(err => console.log(err));
  },
  show: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { username, password, full_name } = req.body;
    knex("users")
      .insert({
        username,
        password,
        full_name
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { username, password, full_name } = req.body;
    knex("users")
      .where("id", req.params.id)
      .update({
        username,
        password,
        full_name
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .del()
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
};
