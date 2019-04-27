const {getDbConn} = require('./db');
const {dbAddr} = require('./config');
const ExpenseService = { };

ExpenseService.createExpense = (fixed, amount, user_id, statement_id,name) =>{
    const sql = `INSERT into expenses(fixed,amount,user_id,statement_id) VALUES($[fixed],$[amount],$[user_id],$[statement_id],$[name]) RETURNING id`;
    return getDbConn(dbAddr).one(sql,{fixed, amount, user_id, statement_id,name});
}
ExpenseService.getSpecificExpenses = (user_id, statement_id,isFixed) => {
    const sql = `SELECT * from expenses WHERE expenses.fixed=$[isFixed] AND user_id=$[user_id] AND statement_id=$[statement_id]`;
    return getDbConn(dbAddr).any(sql,{user_id, statement_id,isFixed});
}
ExpenseService.updateExpense = (fixed, amount, name, id) =>{
    const sql = `UPDATE expenses SET fixed=$[fixed], amount=$[amount] name=$[name] WHERE id=$[id]`;
    return getDbConn(dbAddr).none(sql,{fixed,amount,name,id})
}
ExpenseService.deleteExpense = (id) => { 
    const sql = `DELETE from expenses WHERE id=$[id]`;
    return getDbConn(dbAddr).none(sql,{id});
}
module.exports = { 
    ExpenseService,
}