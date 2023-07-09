const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Reality12',
    database: 'join_us'
});

const createDatabase = (dbName) => {
    const query = `CREATE DATABASE ${dbName}`

    connection.query(query, function (err, result, field) {
        if (err) throw err;
        console.log(`${dbName} created!`)
    });

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


const children = {
    tableName: 'children',
    columns: [
        { field: 'id', type: 'INTEGER', null: 'NOT NULL', key: 'PRIMARY KEY', default: null, extra: 'AUTO_INCREMENT' },
        { field: 'first_name', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
        { field: 'last_name', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
        { field: 'birth_date', type: 'DATE', null: 'NOT NULL', key: null, default: null, extra: null },
    ]
}

createTable(children)

module.exports = {
    connection: connection
};