require('dotenv/config');
require('./database');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class AppController {
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();

    }

    middlewares(){
        this.express.use(cors());
        this.express.use(express.json())
    }

    routes(){
        this.express.use(routes)
    }
}


module.exports = new AppController().express;