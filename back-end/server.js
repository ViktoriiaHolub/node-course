const http = require("http");

const server = http.createServer((req, res) => {
  console.log("working when request has already connected and start listening");
  console.log("request made");
  console.log("req", req);
  console.log("res", res);
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
