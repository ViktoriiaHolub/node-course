const express = require("express");

// express app
const app = express();

// listen for request
app.listen(3000);

app.get("/", (req, res) => {
  // res.send('<p>home page</p>')
  res.sendFile("./front-end/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./front-end/about.html", { root: __dirname });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// page 404
app.use((req, res) => {
  res.status(404).sendFile("./front-end/404.html", { root: __dirname });
});
