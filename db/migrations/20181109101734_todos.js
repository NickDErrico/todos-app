exports.up = function(knex, Promise) {
  return knex.schema.createTable("todos", table => {
    table.increments();
    table.string("title");
    table.boolean("is_completed");
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("todos");
};
