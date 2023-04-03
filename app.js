const express = require("express");
const path = require("path");
const morgan = require("morgan");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "front-end"));

// listen for request
app.listen(3000);

app.use(morgan("short"));

app.use(express.static("public"));

// app.use((req, res, next) => {
//   console.log("new request made");
//   console.log(req.hostname);
//   console.log(req.path);
//   console.log(req.method);

//   next();
// });

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "First Title",
      snippet: "Snippet from the first article.",
    },
    {
      title: "Second Title",
      snippet: "Snippet from the second article.",
    },
    {
      title: "Third Title",
      snippet: "Snippet from the third article.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// page 404
app.use((req, res) => {
  res.status(404).render("404");
});
