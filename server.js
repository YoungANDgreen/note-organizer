

const express = require("express");
const path = require("path");

// creates an express server
const app = express();

// sets the port to be listening on
const PORT = process.env.PORT || 3000;

// Sets up the Express app to be able to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

// routers
require("./routes/index")(app);
require("./routes/notes")(app);

// function to listen

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});