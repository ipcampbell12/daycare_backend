const { connection } = require('./create_db');

//crud


const executeQuery = (query, response, values = null) => {
    connection.query(query, [values], function (err, result) {
        if (err) throw err;
        console.log('Connected do database!')
        response.send(result)
    });
};


function createRow(reqObj, response, table, columns) {
    const values = Object.values(reqObj)
    const query = `INSERT INTO ${table} (${columns.join(',')}) VALUES (?)`;

    executeQuery(query, response, values);

};

function createMultipleRows(values, response, table, columns) {
    const query = `INSERT INTO ${table} (${columns.joins(',')}) VALUES (?)`;

    executeQuery(query, response, [values]);

};

function deleteRow(value, table, column, response) {
    const query = `DELETE FROM ${table} WHERE ${column}=${value}`;

    executeQuery(query, response);
};

function updateRow(table, updateArr, filterColumn, filterValue, response) {
    const updates = updateArr.map(update => `${update[0]}='${update[1]}'`).join(',');
    const query = `UPDATE ${table} SET ${updates} WHERE ${filterColumn} =${filterValue}`;



    executeQuery(query, response);
}

function selectRow(table, filterColumn, filterValue, response) {
    let query = `SELECT * FROM ${table} WHERE ${filterColumn} = ${filterValue}`;

    executeQuery(query, response);

};

function selectJoin(table1, table2, columns1, columns2, id1, id2, provider_id, response, filterVal = null) {

    let query = `
    SELECT ${columns1.concat(columns2)} FROM ${table1}
    JOIN ${table2} ON ${id1} = ${id2}
    WHERE ${id2} = ${provider_id}
    `

    if (filterVal) {
        let filter = `AND ${table1}.id = ${filterVal}`
        let newQuery = query.concat(filter)

        console.log(newQuery);
        executeQuery(newQuery, response);

        return;
    }

    console.log(query)
    executeQuery(query, response)
};

function selectRows(table, response) {
    const query = `SELECT * FROM ${table}`;

    executeQuery(query, response);
};

module.exports = {
    createRow: createRow,
    createMultipleRows: createMultipleRows,
    deleteRow: deleteRow,
    updateRow: updateRow,
    selectRow: selectRow,
    selectRows: selectRows,
    selectJoin: selectJoin
};