const mysql = require('mysql2');

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

const createTable = (table) => {
    connection.query(createTableQuery(table), function (err, result, field) {
        if (err) throw err;
        console.log(`${table.tableName} table created!`)
    });

}

const createTableQuery = (table) => {
    const tableName = `CREATE TABLE ${table.tableName} ( \n`
    const columns = table.columns.map(column => {
        return (Object.values(column)).join(' ')
    }).join(',\n').concat('\n )');

    const query = tableName.concat(columns)
    return query
}






createTable(children)
//selectDatabase('daycare_database');

// connection.end()

module.exports = {
    connection: connection
};