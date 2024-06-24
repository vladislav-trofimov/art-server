const sqlite3 = require('sqlite3').verbose();
const mysql = require('mysql');

require('dotenv').config();

let db = new sqlite3.Database('./db/db.sql', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Подключено к базе данных.');
});


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = { db, connection };