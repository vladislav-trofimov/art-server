const { db } = require('./connection');
  
function insertData(author, filename, description, category) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO art(author_id, category_id, description, file_path) VALUES(?, ?, ?, ?)`;
    db.run(sql, [author, category, description, filename], function(err) {
      if (err) {
        reject(err);
      } else {
        console.log(`Строка добавлена: ${this.lastID}`);
        resolve(this.lastID);
      }
    });
  });
}

function getData(params) {
  return new Promise((resolve, reject) => {
    console.log(params);
    const whereArray = [];
    if (params.user_id && params.user_id !== 'undefined') {
      whereArray.push(`author_id = ${params.user_id}`);
    }
    if (params.category_id) {
      whereArray.push(`category_id = ${params.category_id}`);
    }

    const sql = `SELECT art.id as id, art.file_path as file_path, art.description as description,
                 author.name as author, category.name as category, likes
                 FROM art 
                 LEFT JOIN category ON art.category_id = category.id
                 LEFT JOIN author ON art.author_id = author.id 
                 ${whereArray.length > 0 ? 'WHERE ' + whereArray.join(' AND ') : ''}
                `;
    console.log(sql);
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function setLike(artId, likes) {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE art SET likes = ? WHERE id = ?`;
    db.run(sql, [likes, artId], function(err) {
      if (err) {
        reject(err);
      } else {
        console.log(`Лайк добавлен: ${this.lastID}`);
        resolve(this.lastID);
      }
    });
  });
}


function getArtById(id) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM art WHERE id=?`;
    db.get(sql, [id], function(err, result) {
      if (err || !result) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function deleteArtById(id) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM art WHERE id=?`;
    db.run(sql, [id], function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(this.lastID);
      }
    });
  });
}

/*
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Соединение с базой данных закрыто.');
});
*/
module.exports = { insertData, getData, setLike, getArtById, deleteArtById };