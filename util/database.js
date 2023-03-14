const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'root',
    password: 'handage@12'
});

module.exports = pool.promise();