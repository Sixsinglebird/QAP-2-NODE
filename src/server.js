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
      router.indexPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/about":
      res.statusCode = 200;
      router.aboutPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/contact":
      res.statusCode = 200;
      router.contactPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/products":
      res.statusCode = 200;
      router.aboutPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/subscribe":
      res.statusCode = 200;
      router.subscribePage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/weather":
      res.statusCode = 200;
      router.weatherPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} ${path}  visited`);
      break;

    case "/files/style.css":
      res.statusCode = 200;
      router.stylePage(res);
      emitEvent.emit("log", "server", "STYLE", `${req.url} ${path}  visited`);
      break;

    default:
      res.statusCode = 404;
      router.notFoundPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
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
