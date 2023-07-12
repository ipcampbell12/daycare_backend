const mysql = require('mysql2');
const { tables, createColumn } = require('./tables')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Reality12',
    database: 'daycare_database'
});

const createTable = (table) => {
    connection.query(createTableQuery(table), function (err, result, field) {
        if (err) throw err;
        console.log(`${table.tableName} table created!`)
    });

};


function createTableQuery(table) {

    const tableName = `CREATE TABLE ${table.tableName} (\n`
    const columns = table.columns.map(column => {
        return (Object.values(column)).join(' ')
    }).join(',\n').concat('\n )');

    const query = tableName.concat(columns)

    if (table.foreigners.length !== 0) {

        //remove closing parentheses and add a comma
        const trimmed = query.slice(0, query.length - 1).concat(',')

        let strArr = [];

        for (const arg of table.foreigners) {
            strArr.push(`FOREIGN KEY (${arg[0]}) REFERENCES ${arg[1]}(${arg[2]}) \n `)
        };

        const final = trimmed.concat(strArr.join(',')).concat(')');

        return final
    };


    return query
};


// tables.map(table => createTable(table))

// connection.end()

module.exports = {
    connection: connection
};