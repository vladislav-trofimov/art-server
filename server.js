const express = require('express');
const multer  = require('multer');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const jwt = require('jsonwebtoken');
const request = require('request');

const { insertData, getData } = require('./db/art');
const { login, register, findOrCreateGoogleUser, getUserById } = require('./db/user');

require('dotenv').config();

const corsOpts = { origin: '*', methods: ['GET', 'POST', 'PUT'], allowedHeaders: ['Content-Type'] };

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb) {
  const newUser = {
    name: profile.displayName, // Имя пользователя
    googleId: profile.id, // Google ID
    avatar: profile.photos[0].value // URL аватара пользователя
  };

  console.log('New user:', newUser);

  findOrCreateGoogleUser({ googleId: profile.id, name: newUser.name, avatar:newUser.avatar}, function (err, user) {
    return cb(err, user);
  });
}
));

app.use(session({
  secret: 'your_secret_key', // Секретный ключ для подписи Cookie
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Для HTTPS установите `secure: true`
}));  

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
  // if you use Model.id as your idAttribute maybe you'd want
  // done(null, user.id);
});

passport.deserializeUser(function(id, done) {
User.findById(id, function(err, user) {
  done(err, user);
});
});

app.use(cors(corsOpts));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(express.static(path.join(__dirname, 'uploads')));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session: false, scope: ['profile', 'email'] }),
  async function(req, res) {
    console.log('User:', req.user)

    const user = await getUserById(req.user.googleId);

    const token = jwt.sign({
      name: req.user.name,
      avatar: req.user.avatar,
      id: req.user.googleId, 
      user_id: user.id
    }, 'your_secret_key', { expiresIn: '24h' });
    res.redirect('http://localhost:4200/member?token=' + token);
});

app.get('/avatar', async(req, res) => {
  if (!req.query.id) {
    return res.status(400).send('Bad request');
  }

  const user = await getUserById(req.query.id);
  console.log('User:', user)
  const imageUrl = user.avatar;
  request(imageUrl).pipe(res);
});

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
