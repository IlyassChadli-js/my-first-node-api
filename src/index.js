const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`Server is up on ${port}`)
})

//My first Api
app.get('/', (req, res) => {
    res.send('Our first APi')
})