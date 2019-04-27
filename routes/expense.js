// NPM MODULES
const express = require("express");

// ROUTE FUNCTIONS
const createExpense = (request, response) => {
  const { fixed, amount, user_id, statement_id } = request.body;
};

const getExpense = (request, response) => {
  const { id } = request.params;
};

const updateExpense = (request, response) => {
  const { fixed, amount, user_id, statement_id } = request.body;
};

const deleteExpense = (request, response) => {
  const { id } = request.body;
};

// FUNCTION THAT RETURNS ROUTER
const ExpenseRouter = () => {
  const router = express.Router();

  router.post("/", createExpense);
  router.get("/:id", getExpense);
  router.put("/", updateExpense);
  router.delete("/", deleteExpense);

  return router;
};

module.exports = {
  ExpenseRouter
};
