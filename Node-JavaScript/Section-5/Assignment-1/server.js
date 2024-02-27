const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users', (req, res, next) => {
    console.log('Howdy, Welcome User !')
    res.send('<h1>Howdy, Welcome User !</h1>')
    next()
})

app.use('/', (req, res, next) => {
    console.log(`This Is Praabindh's ⚓ Server`)
    res.send(`<h1>This Is Praabindh's ⚓ Server</h1>`)
})

app.listen(3000)
