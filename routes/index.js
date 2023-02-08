
let db = require("../db/db.json");
let path = require("path");
const fs = require("fs");

module.exports = function (app) {
  //GET Requests
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, noteStuff) => {
      if (err) throw err;
      res.json(JSON.parse(noteStuff));
    });
  });

  //POST Requests

  app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      let noteStuff = JSON.parse(data);
      noteStuff.push(req.body);
      console.log(req.body);
      for (let i = 0; i < noteStuff.length; i++) {
        noteStuff[i].id = i + 1;
      }
      fs.writeFile("./db/db.json", JSON.stringify(noteStuff), (err) => {
        if (err) throw err;
        res.send(db);
      });
    });
  });

  //DELETE Requests
  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      let freshNote = JSON.parse(data);
      for (let i = 0; i < freshNote.length; i++) {
        if (freshNote[i].id == req.params.id) {
          freshNote.splice(i, 1);
        }
      }

      fs.writeFile("./db/db.json", JSON.stringify(freshNote), (err) => {
        if (err) throw err;
        res.send(freshNote);
      });
    });
  });
};