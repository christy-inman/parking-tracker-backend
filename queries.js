const database = require('./database-connection')

module.exports = {
    allSpots() {
        spots = database('parking_spots').select()
        return spots
    },
    getById(id) {
        spots = database('parking_spots').select()
        return spots.where({id}).first()
    },
    createSpot(spot) {
        spots = database('parking_spots')
        return spots.insert(spot)
    },
    updateSpot(id, spot) {
        spots = database('parking_spots').select()
        console.log("step 4", 'UPDATED')
        return spots.where({id}).update(spot)
    },
    deleteSpot(id) {
        spots = database('parking_spots').select()
        return spots.where({id}).delete()
    }
}