////////////////////////////////////////////////
// imports
const http = require("http");
const router = require("./router");
const logger = require("./Logger");
const events = require("events");

////////////////////////////////////////////////
// constants
global.DEBUG = false;
class Event extends events {}
const emitEvent = new Event();

////////////////////////////////////////////////
// server
// CodeMetrics tells me the complexity of this is 14...
// -- a blatant lie
const server = http.createServer((req, res) => {
  let path = "./views/";

  // router switch
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path += "index.html";
      // aha! this call ends the res for the router b4 it begins
      // res.end("under construction"); // <-------------
      router.indexPage(path, res);
      emitEvent.emit("log", req.url, "INFO", "root of site was visited");
      break;
    case "/about":
      res.statusCode = 200;
      path += "about.html";
      router.aboutPage(path, res);
      emitEvent.emit("log", req.url, "INFO", "About Page was visited");
      break;
    case "/contact":
      res.statusCode = 200;
      path += "contact.html";
      router.contactPage(path, res);
      break;
    case "/products":
      res.statusCode = 200;
      path += "products.html";
      router.aboutPage(path, res);
      break;
    case "/subscribe":
      res.statusCode = 200;
      path += "subscribe.html";
      router.subscribePage(path, res);
      break;
    default:
      res.statusCode = 404;
      path += "404.html";
      router.notFoundPage(path, res);
      break;
  }
});

////////////////////////////////////////////////
// listeners
// listening for activity on localhost:3000
server.listen(3000, "localhost", () => {
  if (DEBUG) console.log("Listening on port 3000...");
});

// listen for event "log"
emitEvent.on("log", (event, level, message) => {
  if (DEBUG) logger.logEvent(event, level, message);
});
