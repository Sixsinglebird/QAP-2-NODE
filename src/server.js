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
const serverSwitch = http.createServer(async (req, res) => {
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
      router.productsPage(res);
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
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/news":
      res.statusCode = 200;
      router.newsPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;
    case "/files/style.css":
      res.statusCode = 200;
      router.stylePage(res);
      emitEvent.emit("log", "server", "STYLE", `${req.url} visited`);
      break;

    default:
      // ok so regular expressions arent supported in a switch statement.
      if (/\/images\/\w{3}_\d{4}\.JPG/i.test(req.url)) {
        res.statusCode = 200;
        // .views bc App.js is calling this from the "higher" directory
        await router.imageRes(req.url, res);
        emitEvent.emit("log", "server", "IMAGE", `${req.url} visited`);
      } else {
        res.statusCode = 404;
        router.notFoundPage(res);
        emitEvent.emit(
          "log",
          "server",
          "WARNING",
          `${req.url} ${path} visited`
        );
        break;
      }
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
