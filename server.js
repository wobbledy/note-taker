const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// Using Port 3001 or what port Heroku assigns
const PORT = process.env.PORT || 3001;

// Creating Express JS object
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepagee
 app.get('/', (req, res) =>
   res.sendFile(path.join(__dirname, './public/index.html'))
);


// Gets the file from notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
)

// Fallback request to get to index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// Listening on the applications port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
