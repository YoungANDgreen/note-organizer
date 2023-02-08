

const express = require("express");
let path = require("path");


module.exports = function (app) {
  app.use(express.static(path.join(__dirname, "../public")));
  // GET Requests
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // defaults to home if no route matches
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};