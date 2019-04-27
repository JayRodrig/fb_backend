// NPM MODULES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const getApp = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(cors());

    return app;
}

module.exports = {
    getApp,
}

