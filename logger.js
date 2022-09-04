const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(method, url, time) // 'GET / 2022'
    next();
}

module.exports = logger