const { connection } = require('./create_db');


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

    console.log(query)
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

function selectJoin(provider_id, id, type, response, ...params) {

    const args = params[0];

    let query = '';

    if (type === 'single') {
        query = `
        SELECT ${args['columns'].join(',')} FROM ${args['tables'][0]}
        JOIN ${args['tables'][1]} ON ${args['ids'][0]} = ${args['ids'][1]}
        WHERE ${args['ids'][1]} = ${provider_id}
        `;
    };

    if (type === 'double') {
        query = `
        SELECT ${args['columns'].join(',')} FROM ${args['tables'][0]}
        JOIN ${args['tables'][1]} ON ${args['ids'][0]} = ${args['ids'][1]}
        JOIN ${args['tables'][2]} ON ${args['ids'][1]} = ${args['ids'][2]}
        WHERE ${args['ids'][1]} = ${provider_id}
        `;
    };

    response.send(query)
    // if (id) {
    //     let filter = `AND ${args['tables'][0]}.id = ${id} `
    //     let newQuery = query.concat(filter)

    //     executeQuery(newQuery, response);

    //     return;
    // }

    // console.log(query)
    // executeQuery(query, response)
};




function selectRows(table, response) {
    const query = `SELECT * FROM ${table} `;

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