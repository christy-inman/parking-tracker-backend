const database = require('./database-connection')

module.exports = {
    spots = database('parking_spots').select(),

    allSpots() {
        return spots
    },
    getById(id) {
        return spots.where({id}).first()
    },
    createSpot(spot) {
        console.log('yup')
        return spots.insert(spot)
    },
    updateSpot(id, spot) {
        console.log('UPDATED')
        return this.spots.where({id}).update(spot)
    },
    deleteSpot(id) {
        return spots.where({id}).delete()
    }
}