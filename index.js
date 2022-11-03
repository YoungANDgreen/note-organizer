const express = require('express');


const notes = require('./Develop/routes/notes');


const app = express();

app.use('/notes', notes);




module.exports = app;
