const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("working when request has already connected and start listening");
  console.log("request made");
  // console.log(req.url, req.method);

  // creating response of just text
  // res.setHeader("Content-Type", "text/plain");
  // res.write("You will see my msg using node. Yes, I will learn it");
  // res.end();

  // creating response of html
  res.setHeader("Content-Type", "text-html");
  // res.write("<h1 style='color: blue;'>My website page</h1>");
  // res.write("<h3>Chapter 1</h3>");
  // res.end();

  // creating response of html  from html file
  fs.readFile("./front-end/index.html", (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    }
    // res.write(data);
    // res.end();
    res.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
