const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  password: '1234',
  user: 'root',
  database: 'restaurant',
});

module.exports = pool;
