const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const queries = require('./queries')

app.listen(port)
app.use(cors())
app.get('/', (request, response) => {
    queries.allSpots()
        .then(spots => response.send(spots))
})
console.log(`Listening on port ${port}`)