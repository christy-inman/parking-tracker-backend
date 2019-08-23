
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('parking_spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('parking_spots').insert([
        {
          cross_streets: 'N. Clarkson & 10th',
          day: '2019-08-20',
          notes: 'parked on 10th near the alley'
        },
        { 
          cross_streets: 'Platte & 17th',
          day: '2019-07-26',
          notes: 'on platte, meter runs out at noon'
        },
        { 
          cross_streets: 'Blake & 38th',
          day: '2019-08-21',
          notes: 'on blake near the bridge stairs'
        }
      ]);
    });
};
