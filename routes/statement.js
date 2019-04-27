// NPM MODULES
const express = require('express');

// ROUTE FUNCTIONS
const createStatement = (request, response) => {
    const {name, user_id,} = request.body;
}

const getStatement = (request, response) => {
    const {id,} = request.params;
}

const updateStatement = (request, response) => {
    const {name, user_id} = request.body;
}

const deleteStatement = (request, response) => {
    const {id,} = request.body;
}

// FUNCTION THAT RETURNS ROUTER
const StatementRouter = () => {
    const router = express.Router()

    router.post('/', createStatement);
    router.get('/:id', getStatement);
    router.put('/', updateStatement);
    router.delete('/', deleteStatement);

    return router;
}

module.exports = {
    StatementRouter,
}