// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/PARKING_SPOT_TRACKER_DB'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  }

};
