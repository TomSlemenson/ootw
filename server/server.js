const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./router.js");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/OOTWMailingList", 
{ useNewUrlParser: true });
// mongoose.connect("mongodb://localhost/OOTWMailingList", { useNewUrlParser: true });



app.listen(PORT, function() {
  console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});
