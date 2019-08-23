const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const queries = require('./queries')

app.listen(port)
app.use(cors())
app.use(bodyParser.json())
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
        .then(response.status(201))
})
app.delete('/:id', (request, response) => {
    queries.deleteSpot(request.params.id)
        .then(response.status(204))
})
console.log(`Listening on port ${port}`)