const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const queries = require('./queries')

app.listen(port)
app.use(cors())
app.get('/', (request, response) => {
    queries.allSpots()
        .then(spots => response.json(spots))
})
app.get('/:id', (request, response) => {
    queries.getById(request.params.id)
        .then(spot => {response.json(spot)})
})
app.post('/', (request, response) => {
    queries.createSpot(request.body)
})
console.log(`Listening on port ${port}`)