const AWS = require('aws-sdk');
const fs = require('fs');

require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2'
});

const s3 = new AWS.S3();

const uploadFileS3 = (params) => {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject('Ошибка загрузки файла: ' + err);
      } else {
        resolve(data.Location);
      }
    });
  });
};

module.exports = { uploadFileS3 }