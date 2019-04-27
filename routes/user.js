// NPM MODULES
const express = require('express');

// ROUTE FUNCTIONS
const createUser = (request, response) => {
    const {first_name, last_name, email, firebase_token, avatar_url, income} = request.body;
}

const getUser = (request, response) => {
    const {id,} = request.params;
}

const updateUser = (request, response) => {
    const {first_name, last_name, email, firebase_token, avatar_url, income, id} = request.body;
}

const deleteUser = (request, response) => {
    const {id,} = request.body;
}

// FUNCTION THAT RETURNS ROUTER
const UserRouter = () => {
    const router = express.Router()

    router.post('/', createUser);
    router.get('/:id', getUser);
    router.put('/', updateUser);
    router.delete('/', deleteUser);

    return router;
}

module.exports = {
    UserRouter,
}