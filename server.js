////////////////////////////////////////////////
// imports
const http = require("http");

////////////////////////////////////////////////
// constants
global.DEBUG = true;

////////////////////////////////////////////////
// server
const server = http.createServer((req, res) => {
  if (DEBUG) console.log(req.url, res.url);
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Sixsinglebird's server root visited");
      break;
    case "/about":
      res.statusCode = 200;
      res.end("Sixsinglebird's server about page visited");
      break;
    case "/contact":
      res.statusCode = 200;
      res.end("Sixsinglebird's server contact page visited");
      break;
    case "/products":
      res.statusCode = 200;
      res.end("Sixsinglebird's server products page visited");
      break;
    case "/subscribe":
      res.statusCode = 200;
      res.end("Sixsinglebird's server subscribe page visited");
      break;
    default:
      res.statusCode = 404;
      path += "404.html";
      // res.end("404 response - page not found - under construction");
      router.notFoundPage(path, res);
      break;
  }
});

////////////////////////////////////////////////
// server listener
server.listen(3000, "localhost", () =>
  console.log("Listening on port 3000...")
);
