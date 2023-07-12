const { connection } = require('./create_db');

//crud


const executeQuery = (query, response, values = null) => {
    connection.query(query, [values], function (err, result) {
        if (err) throw err;
        console.log('Connected do database!')
        response.send(result)
    });
}


