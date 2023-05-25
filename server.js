////////////////////////////////////////////////
// imports
const http = require("http");
const router = require("./router");

////////////////////////////////////////////////
// constants
global.DEBUG = true;

////////////////////////////////////////////////
// server
const server = http.createServer((req, res) => {
  // this is our debug statement for this function
  if (DEBUG) console.log(req.url, res.url);
  // path for the response data
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      // aha! this call ends the res for the router b4 it begins
      // res.end("under construction"); // <-------------
      router.indexPage(path, res);
      break;
    case "/about":
      res.statusCode = 200;
      path += "about.html";
      // res.end("Sixsinglebird's server about page under construction");
      router.aboutPage(path, res);
      break;
    case "/contact":
      res.statusCode = 200;
      path += "contact.html";
      // res.end("Sixsinglebird's server contact page under construction");
      router.contactPage(path, res);
      break;
    case "/products":
      res.statusCode = 200;
      path += "products.html";
      // res.end("Sixsinglebird's server products page under construction");
      router.aboutPage(path, res);
      break;
    case "/subscribe":
      res.statusCode = 200;
      path += "subscribe.html";
      // res.end("Sixsinglebird's server subscribe page under construction");
      router.subscribePage(path, res);
      break;
    default:
      res.statusCode = 404;
      path += "fourOhFour.html";
      res.end("404 response - page not found - under construction");
      break;
  }
});

////////////////////////////////////////////////
// server listener
server.listen(3000, "localhost", () =>
  console.log("Listening on port 3000...")
);
