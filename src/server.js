////////////////////////////////////////////////
// imports
const fs = require("fs");
const http = require("http");
const router = require("./router");
const logger = require("./logger");
const events = require("events");
class Event extends events {}
const emitEvent = new Event();

////////////////////////////////////////////////
// server
const serverSwitch = http.createServer((req, res) => {
  let path = "./views/";
  // router switch
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path += "index.html";
      router.indexPage(res);
      emitEvent.emit("log", "server", "INFO", `${req.url} visited`);
      break;

    case "/about":
      res.statusCode = 200;
      path += "about.html";
      router.aboutPage(res);
      emitEvent.emit("log", "server", "INFO", `${req.url} visited`);
      break;

    case "/contact":
      res.statusCode = 200;
      path += "contact.html";
      router.contactPage(res);
      emitEvent.emit("log", "server", "INFO", `${req.url} visited`);
      break;

    case "/products":
      res.statusCode = 200;
      router.aboutPage(res);
      emitEvent.emit("log", "server", "INFO", `${req.url} visited`);
      break;

    case "/subscribe":
      res.statusCode = 200;
      path += "subscribe.html";
      router.subscribePage(res);
      emitEvent.emit("log", "server", "INFO", `${req.url} visited`);
      break;

    case "/weather":
      res.statusCode = 200;
      router.weatherPage(res);
      emitEvent.emit("log", "server", "INFO", `${req.url} ${path}  visited`);
      break;

    case "/files/style.css":
      res.statusCode = 200;
      path += "files/style.css";
      router.stylePage(path, res);
      emitEvent.emit("log", "server", "INFO", `${req.url} ${path}  visited`);
      break;

    default:
      res.statusCode = 404;
      path += "404.html";
      router.notFoundPage(res);
      emitEvent.emit("log", "server", "INFO", `${req.url} visited`);
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
