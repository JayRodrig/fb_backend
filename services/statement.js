const { getDbConn } = require("./db");
const { dbAddr } = require("./config");
const StatementService = {};

<<<<<<< HEAD
StatementService.createStatement = (name, user_id) => {
  const sql = `INSERT INTO statements(name,user_id) VALUES($[name],$[user_id]) RETURNING id`;
  return getDbConn(dbAddr).one(sql, { name, user_id });
=======
StatementService.createStatement = (name, budget, user_id) => {
  const sql = `INSERT INTO statements(name, budget, user_id) VALUES($[name],$[budget],$[user_id]) RETURNING id`;
  return getDbConn(dbAddr).one(sql, { name, budget, user_id });
>>>>>>> master
};
StatementService.getStatement = id => {
  const sql = `SELECT * FROM statements WHERE id=$[id]`;
  return getDbConn(dbAddr).one(sql, { id });
};
StatementService.updateStatement = (name, id) => {
  const sql = `UPDATE statements SET name=$[name] WHERE id=$[id] RETURNING id`;
  return getDbConn(dbAddr).one(sql, { name, id });
};
StatementService.deleteStatement = id => {
  const sql = `DELETE from statements WHERE id=$[id]`;
  return getDbConn(dbAddr).none(sql, { id });
};

<<<<<<< HEAD
StatementService.getUserStatements = user_id => {
  const sql = `SELECT statements.*,users.first_name, users.last_name FROM statements JOIN users ON users.id=$[user_id]`;
  return getDbConn(dbAddr).any(sql, { id });
};

=======
StatementService.getUserStatements = id => {
  const sql = `SELECT statements.*,users.first_name, users.last_name FROM statements JOIN users ON users.id=$[id]`;
  return getDbConn(dbAddr).any(sql, { id });
};

StatementService.getStatementsAndExpenses = id => {
  const sql = `
      select statements.id AS statement_id, statements.name AS statement_name, 
      statements.created_at AS statement_created_at, users.email, users.first_name, users.last_name, 
      expenses.name AS expense_name, expenses.amount AS expense_amount, expenses.fixed FROM statements JOIN users ON statements.user_id = users.id 
      JOIN expenses ON expenses.statement_id = statements.id WHERE statements.id = $[id]
  `
  return getDbConn(dbAddr).any(sql, {id,});
};

>>>>>>> master
module.exports = {
  StatementService
};
