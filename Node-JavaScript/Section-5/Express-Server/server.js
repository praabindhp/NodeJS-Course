const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

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
