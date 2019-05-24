const express = require('express');

class AppController {
    constructor () {
        this.express = express();

        this.PORT = 3000;
        this.HOST = '0.0.0.0';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express;