const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');

notes.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

module.exports = notes;