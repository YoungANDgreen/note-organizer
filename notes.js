const note = require('express').Router();
const { readFromFile, readAndAppend } = require('./Develop/helpers/fsUtils');
const uuid = require('./Develop/helpers/uuid');


note.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);


note.post('/', (req, res) => {
  
  const { title, text } = req.body;

  
  if (req.body) {
    
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');

    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = note;
