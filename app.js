const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname));
// home directory
// app.get('/', (req, res) => {
//     res.sendFile("D:/apibasic/index.html")}
//     )
    


//listening port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)}
    )