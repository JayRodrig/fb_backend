// NPM MODULES
const express = require('express');

// ROUTE FUNCTIONS
const createGoal = (request, response) => {
    const {target, user_id, name, balance,} = request.body;
}

const getGoal = (request, response) => {
    const {id,} = request.params;
}

const updateGoal = (request, response) => {
    const {target, user_id, name, balance,} = request.body;
}

const deleteGoal = (request, response) => {
    const {id,} = request.body;
}

// FUNCTION THAT RETURNS ROUTER
const GoalRouter = () => {
    const router = express.Router()

    router.post('/', createGoal);
    router.get('/:id', getGoal);
    router.put('/', updateGoal);
    router.delete('/', deleteGoal);

    return router;
}

module.exports = {
    GoalRouter,
}