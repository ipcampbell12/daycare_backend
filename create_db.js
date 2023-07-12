const mysql = require('mysql2');
const { tables, createColumn } = require('./tables')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Reality12',
    database: 'daycare_database'
});

const createDatabase = (dbName) => {
    const query = `CREATE DATABASE ${dbName}`

    connection.query(query, function (err, result, field) {
        if (err) throw err;
        console.log(`${dbName} created!`)
    });

}

const selectDatabase = (dbName) => {
    const query = `USE ${dbName}`

    connection.query(query, function (err, result, field) {
        if (err) throw err;
        console.log(`Now using ${dbName} as database`)
    })
}

const createTable = (table, ...foreignArr) => {
    connection.query(createTableQuery(table, ...foreignArr), function (err, result, field) {
        if (err) throw err;
        console.log(`${table.tableName} table created!`)
    });

}


//can't use arguments keyword in arrow functions

function createTableQuery(table, ...foreignArr) {

    const tableName = `CREATE TABLE ${table.tableName} (\n`
    const columns = table.columns.map(column => {
        return (Object.values(column)).join(' ')
    }).join(',\n').concat('\n )');

    const query = tableName.concat(columns)

    if (foreignArr) {
        const trimmed = query.slice(0, query.length - 1).concat(',')

        let strArr = [];

        for (const arg of foreignArr) {
            strArr.push(`FOREIGN KEY (${arg[0]}) REFERENCES ${arg[1]} \n `)
        };

        const final = trimmed.concat(strArr.join(',')).concat(')');

        return final
    };


    return query
}

console.log(createTableQuery(parents, ['child_id', 'children']));
// const createAllTables = () => tables.map(
//     table => createTableQuery(table)
// );





//selectDatabase('daycare_database');

connection.end()

module.exports = {
    connection: connection
};