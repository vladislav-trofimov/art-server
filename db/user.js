const { db } = require('./connection');
  
function login(name, password) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT id FROM author WHERE name=? AND password=?`;
      console.log(`Поиск пользователя: ${name} ${password}`)
      db.get(sql, [name, password], function(err, result) {
        if (err || !result) {
          reject(err);
        } else {
          console.log(`Пользователь найден: ${result.id}`);
          resolve(result.id);
        }
      });
    });
}

function register(name, password) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO author(name, password) VALUES(?, ?)`;
    db.run(sql, [name, password], function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(this.lastID);
      }
    });
  });
}

module.exports = { login, register };