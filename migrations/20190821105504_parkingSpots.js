
exports.up = function(knex) {
  return knex.schema.createTable('parking_spots', (spot) => {
      spot.increments('id')
      spot.string('cross_streets', 50)
      spot.date('date')
      spot.string('notes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('parking_spots')
};
