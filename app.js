const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries')

app.listen(port);
app.get('/', (request, response) => {
    queries.listAll().then(spots => response.send(spots))
})
console.log(`Listening on port ${port}`)