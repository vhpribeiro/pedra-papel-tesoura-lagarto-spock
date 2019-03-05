const express = require('express');
const bodyParser = require('body-parser');

class AppController{
    constructor(){
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false}));

        this.express.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");
        next();
        });
    }

    routes(){
        this.express.use(require('../routes/analisaJogadaRoute'));
    }
}

module.exports = new AppController().express;