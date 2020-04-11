const express = require('express')
const bodyParse = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')


const app = express()

app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())


app.get('/test', (req, res) => {
    res.send({
        message: "Hellp"
    })
})

const port = process.env.PORT || 3090
app.listen(port, () => console.log(`listeining on port ${port} ..... `))