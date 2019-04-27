const { getDbConn } = require("./db");
const { dbAddr } = require("./config");
const StatementService = {};

StatementService.createStatement = (name, user_id) => {
  const sql = `INSERT INTO statements(name,user_id) VALUES($[name],$[user_id]) RETURNING id`;
  return getDbConn(dbAddr).one(sql, { name, user_id });
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

StatementService.getUserStatements = user_id => {
  const sql = `SELECT statements.*,users.first_name, users.last_name FROM statements JOIN users ON users.id=$[user_id]`;
  return getDbConn(dbAddr).any(sql, { id });
};

module.exports = {
  StatementService
};
