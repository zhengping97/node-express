const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//req => middleware => res

app.use([logger, authorize]) //app.use(logger)
//http://localhost:5000/about?user=john

// 1. use vs route
// 2. options - our own / express / third party

//app.use(express.static('./public'))

app.get('/', (req, res) => { // logger is the middleware
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => { // logger is the middleware
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user) //http://localhost:5000/api/items?user=john
    res.send('Items')
})

// app.get('/api/items', [logger, authorize], (req, res) => {
//     console.log(req.user)
//     res.send('Items')
// })
// without using use, easy for selected path

app.listen(5000, () => {
    console.log('Server is listening on port 5000....') // http://localhost:5000/
})