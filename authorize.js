const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'john', id: 3 }
        //http://localhost:5000/api/items?user=john
        next()
    }
    else {
        // 401 is the status code to return when the client provides no credentials or invalid credentials
        res.status(401).send('unauthorized')
    }
    console.log('authorize')
    next()
}

module.exports = authorize