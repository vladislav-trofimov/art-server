const express = require('express');
const multer  = require('multer');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const { insertData, getData } = require('./db/art');
const { login, register } = require('./db/user');

const corsOpts = { origin: '*', methods: ['GET', 'POST', 'PUT'], allowedHeaders: ['Content-Type'] };

app.use(cors(corsOpts));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(express.static(path.join(__dirname, 'uploads')));

let uploadPath;
let filename;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('BODY:', req.body);
    uploadPath = path.join(__dirname, 'uploads', '1');
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    filename = file.fieldname + '-' + Date.now() + '-' + file.originalname;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage })

/*
app.post('/upload', handleTextFields, upload.single('file'), async(req, res) => {
  console.log(req.body.description, filename);  
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }
  insertData(req.body.user_id, path.join(req.body.user_id.toString(), filename), req.body.description, req.body.category)
    .then()
    .catch(console.error);
  res.send('File uploaded successfully');
});
*/

app.post('/upload', async(req, res) => {
  console.log(req.body.user_id, req.body.category, req.body.description);
  console.log(req.files.file.name);

  const file = req.files.file;
  const uploadPath = path.join(__dirname, 'uploads', String(req.body.user_id));
  try {
    fs.mkdirSync(uploadPath, { recursive: true });

    const filePath = path.join(uploadPath, file.name.replace(/ /g, '_'));
    const filePathShort = path.join(String(req.body.user_id), file.name.replace(/ /g, '_'));

    file.mv(filePath, function(err) {if (err) {console.log(err);}});
    insertData(req.body.user_id, filePathShort, req.body.description, req.body.category)
      .then()
      .catch(console.error);
    res.status(200).json({ message: 'File uploaded successfully' });

  } catch (err) {
      res.status(500);
  }

});

app.get('/images', async(req, res) => {
    const data = await getData(req.query);
    res.send(data);
});

app.get('/', async(req, res) => {
    res.send('Healtcheck');
});

app.post('/login', async(req, res) => {
  const { username, password } = req.body;
  console.log('Username:', username);
  console.log('Password:', password);
  try {
    const result = await login(username, password);
    res.send({ status: 200, id: result });
  } catch(e) {
    console.error(e);
    res.send({ status: 500 });
  }
});

app.post('/register', async(req, res) => {
  const { username, password } = req.body;
  console.log('Username:', username);
  console.log('Password:', password);
  try {
    const result = await register(username, password);
    res.send({ status: 200, id: result });
  } catch(e) {
    console.error(e);
    res.send({ status: 500 });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
