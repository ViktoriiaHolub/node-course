const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { render } = require("ejs");
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// connect to mongoDB
const dbURI =
  "mongodb+srv://****:****@cluster0.u2iegfo.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("connected to db");
    // listen for request
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "front-end"));

// log about request
app.use(morgan("short"));

// create middleware for encoding requests as POST
// extended - розширений
app.use(express.urlencoded({ extended: true }));

// give access to that folder and all files inside
app.use(express.static("public"));

// app.use((req, res, next) => {
//   console.log("new request made");
//   console.log(req.hostname);
//   console.log(req.path);
//   console.log(req.method);

//   next();
// });

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// blogs routes
app.use("/blogs", blogRoutes);

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New Blog 2",
    snippet: "about my new blog",
    body: "here you can read more information about my blog",
  });
  blog
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
  Blog.findById("6432c1fd5a50b4e4eb0287c5")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// page 404
app.use((req, res) => {
  res.status(404).render("404");
});
