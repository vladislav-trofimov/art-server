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
    
    const whereArray = [];
    if (params.user_id) {
      whereArray.push(`author_id = ${params.user_id}`);
    }
    if (params.category_id) {
      whereArray.push(`category_id = ${params.category_id}`);
    }

    const sql = `SELECT * FROM art ${whereArray.length > 0 ? 'WHERE ' + whereArray.join(' AND ') : ''}`;
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

/*
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Соединение с базой данных закрыто.');
});
*/
module.exports = { insertData, getData };