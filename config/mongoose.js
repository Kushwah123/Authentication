const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://user123:sX1WsbYrcS8eaBcK@cluster0.51384.mongodb.net/Project?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true  });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Your server successfully connected to MONGODb");
});

module.exports = db;
