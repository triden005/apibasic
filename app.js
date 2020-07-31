const express = require('express')
const app = express()
const port = 3000


// home directory
app.get('/', (req, res) => {
    res.send('Hello World!')})



//listening port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)})