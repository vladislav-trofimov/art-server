const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/db.sql', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Подключено к базе данных.');
});

exports.db = db;