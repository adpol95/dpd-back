module.exports = function cors(app) {
    const cors = require('cors');
    const options = {
        origin: "*",
        methods: "GET, PUT, POST, PATCH, DELETE",
        allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    }
    app.use(cors(options));
    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header(
    //         'Access-Control-Allow-Headers',
    //         'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //     );
    //     if (req.method === 'OPTION') {
    //         res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    //         return res.status(200).json({});
    //     }
    //     next();
    // });
}
