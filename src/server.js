////////////////////////////////////////////////
// imports
const http = require("http");
const router = require("./router");
const logger = require("./logger");
const events = require("events");
class Event extends events {}
const emitEvent = new Event();

////////////////////////////////////////////////
// server
// CodeMetrics tells me the complexity of this is 14...
// -- a blatant lie
const serverSwitch = http.createServer((req, res) => {
  let path = "./views/";
  // router switch
  switch (req.url) {
    // these cases are used to direct trafic to the
    // right path in the router
    case "/":
      res.statusCode = 200;
      path += "index.html";
      // aha! this call ends the res for the router b4 it begins
      // res.end("under construction"); // <-------------
      router.indexPage(path, res);
      emitEvent.emit("log", req.url, "INFO", "File served succesfully");
      break;

    case "/about":
      res.statusCode = 200;
      path += "about.html";
      router.aboutPage(path, res);
      emitEvent.emit("log", req.url, "INFO", "File served succesfully");
      break;

    case "/contact":
      res.statusCode = 200;
      path += "contact.html";
      router.contactPage(path, res);
      emitEvent.emit("log", req.url, "INFO", "File served succesfully");
      break;

    case "/products":
      res.statusCode = 200;
      path += "products.html";
      router.aboutPage(path, res);
      emitEvent.emit("log", req.url, "INFO", "File served succesfully");
      break;

    case "/subscribe":
      res.statusCode = 200;
      path += "subscribe.html";
      router.subscribePage(path, res);
      emitEvent.emit("log", req.url, "INFO", "File served succesfully");
      break;

    case "/nlweather":
      res.statusCode = 200;
      path += "nlweather.html";
      router.weatherPage(path, res);
      emitEvent.emit("log", req.url, "INFO", "weather page visited");
      break;

    default:
      res.statusCode = 404;
      path += "404.html";
      router.notFoundPage(path, res);
      emitEvent.emit("log", req.url, "INFO", "404 Page was visited");
      break;
  }
});

////////////////////////////////////////////////
// listen for event "log"
emitEvent.on("log", (event, level, message) => {
  if (global.DEBUG) logger.logEvent(event, level, message);
});

////////////////////////////////////////////////
// export
module.exports = { serverSwitch };
