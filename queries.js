const { connection } = require('./create_db');

//crud


const executeQuery = (query, response, values = null) => {
    connection.query(query, [values], function (err, result) {
        if (err) throw err;
        console.log('Connected do database!')
        response.send(result)
    });
};


function createRow(value, response, table, columns) {
    const query = `INSERT INTO ${table} (${columns.joins(',')}) VALUES ?`;

    executeQuery(query, response, [value]);

};

function createMultipleRows(values, response, table, columns) {
    const query = `INSERT INTO ${table} (${columns.joins(',')}) VALUES (?)`;

    executeQuery(query, response, [values]);

};

function deleteRow(value, table, column, response) {
    const query = `DELETE FROM ${table} WHERE ${column}=${value}`;

    executeQuery(query, response);
};

function updateRow(value, table, columnToUpdate, filterColumn, filterValue, response) {

    const query = `UPDATE ${table} SET ${columnToUpdate} = ${value} WHERE  ${filterColumn} =${filterValue}`;

    executeQuery(query, response);
}


module.exports = {
    createRow: createRow,
    createMultipleRows: createMultipleRows,
    deleteRow: deleteRow,
    updateRow: updateRow
};