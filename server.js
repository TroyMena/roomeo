const path = require('path');
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const bodyParser = require('body-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// For Cloudinairy:
app.get("/", (request, response) => {
  response.json({ message: "Hey! This is your server response!" });
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  // Upload the file to Cloudinary
  cloudinary.uploader.upload_stream(
    { resource_type: 'auto' },
    (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error uploading file to Cloudinary' });
      }
      // The result object contains information about the uploaded file
      const imageUrl = result.secure_url;
      res.json({ imageUrl });
    }
  ).end(req.file.buffer);
});

// image upload API
app.post("/image-upload", (request, response) => {
  // collected image from a user
  const data = {
    image: request.body.image,
  }

  // upload image here
  cloudinary.uploader.upload(data.image)
  .then((result) => {
    response.status(200).send({
      message: "success",
      result,
    });
  }).catch((error) => {
    response.status(500).send({
      message: "failure",
      error,
    });
  });
});

module.exports = app;