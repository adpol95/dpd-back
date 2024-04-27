function apiNotFound(req, res) {
    res.status(400).json('API not found!');
}

module.exports = function errorHandler(app) {
    app.use(apiNotFound); //Middleware
}
