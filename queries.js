const database = require('./database-connection')

module.exports = {
    allSpots(){
        return database('parking_spots')
    }
}