const database = require('./database-connection')


module.exports = {

    allSpots() {
        const spots = database('parking_spots').select()
        return spots
    },
    getById(id) {
        return database('parking_spots').select()
            .where({id}).first()
    },
    createSpot(spot) {
        console.log('yup')
        const spots = database('parking_spots')
        return spots.insert(spot)
    },
    deleteSpot(id) {
        const spots = database('parking_spots')
        return spots.where({id}).delete()
    }
}