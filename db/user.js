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

function findOrCreateGoogleUser(data, callback) {
  db.get('SELECT * FROM author WHERE googleId = ?', [data.googleId], function(err, user) {
    if (err) {
      return callback(err);
    }
    if (user) {
      return callback(null, user);
    } else {
      const newUser = {
        name: data.name,
        avatar: data.avatar,
        googleId: data.googleId
      };
      db.run('INSERT INTO author (name, googleId, avatar) VALUES (?, ?, ?)', [newUser.name, newUser.googleId, newUser.avatar], function(err) {
        if (err) {
          return callback(err);
        }
        return callback(null, newUser);
      });
    }
  });
}

function getUserById(id) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM author WHERE googleId=?`;
    db.get(sql, [id], function(err, result) {
      if (err || !result) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { login, register, findOrCreateGoogleUser, getUserById };