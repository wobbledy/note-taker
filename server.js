const express = require('express');
const path = require('path');
const fs = require('fs');

// Using Port 3001 or what port Heroku assigns
const PORT = process.env.PORT || 3001;

// Creating Express JS object
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

 app.get('/', (req, res) =>
   res.sendFile(path.join(__dirname, './public/index.html'))
);
// Gets the files frome notes.html
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
