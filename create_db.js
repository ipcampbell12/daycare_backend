const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Reality12',
    database: 'join_us'
});


const createTable = (table) => {
    const tableName = `CREATE TABLE ${table.tableName} ( \n`
    const columns = table.columns.map(column => {
        return (Object.values(column)).join(' ')
    }).join(',\n').concat('\n )');

    const query = tableName.concat(columns)
    return query
}


const table = {
    tableName: 'people',
    columns: [
        { field: 'id', type: 'INTEGER', null: 'NOT NULL', key: 'PRIMARY KEY', default: null, extra: 'AUTO_INCREMENT' },
        { field: 'first_name', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
        { field: 'last_name', type: 'VARCHAR(255)', null: 'NOT NULL', key: null, default: null, extra: null },
    ]
}


connection.query(createTable(table), function (err, result, field) {
    if (err) throw err;
    console.log(`${table.tableName} table created!`)
});


module.exports = {
    connection: connection
};