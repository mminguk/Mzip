const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: 'localhost',
  password: '1234',
  user: 'root',
  database: 'restaurant',
});

module.exports = pool;
