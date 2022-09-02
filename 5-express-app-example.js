const express = require('express')
const path = require('path');
const app = express()

app.use(express.static('./public')) //setup static and middleware

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static assets
//     Service Search Rendering (SSR)
// })

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
    //status 404 means that a requested page is not available
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
}) // http://localhost:5000/