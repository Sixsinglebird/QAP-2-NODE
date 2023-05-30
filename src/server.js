////////////////////////////////////////////////
// imports
const http = require("http");
const router = require("./router");
const logger = require("./logger");
const events = require("events");
class Event extends events {}
const emitEvent = new Event();

////////////////////////////////////////////////
// constant
const cookieExp = new Date(Date.now() + 86400000);

////////////////////////////////////////////////
// server
const serverSwitch = http.createServer(async (req, res) => {
  // router switch
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader(
        "Set-Cookie",
        `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
      );
      router.indexPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/about":
      res.statusCode = 200;
      res.setHeader(
        "Set-Cookie",
        `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
      );
      router.aboutPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/contact":
      res.statusCode = 200;
      res.setHeader(
        "Set-Cookie",
        `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
      );
      router.contactPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/products":
      res.statusCode = 200;
      res.setHeader(
        "Set-Cookie",
        `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
      );
      router.productsPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/subscribe":
      res.statusCode = 200;
      res.setHeader(
        "Set-Cookie",
        `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
      );
      router.subscribePage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/weather":
      res.statusCode = 200;
      res.setHeader(
        "Set-Cookie",
        `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
      );
      router.weatherPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/news":
      res.statusCode = 200;
      res.setHeader(
        "Set-Cookie",
        `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
      );
      router.newsPage(res);
      emitEvent.emit("log", "server", "PAGE", `${req.url} visited`);
      break;

    case "/files/style.css":
      res.statusCode = 200;
      res.setHeader(
        "Set-Cookie",
        `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
      );
      router.stylePage(res);
      emitEvent.emit("log", "server", "STYLE", `${req.url} visited`);
      break;

    default:
      // ok so regular expressions arent supported in a switch statement.
      if (/\/images\/\w{3}_\d{4}\.JPG/i.test(req.url)) {
        res.statusCode = 200;
        res.setHeader(
          "Set-Cookie",
          `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
        );
        // .views bc App.js is calling this from the "higher" directory
        await router.imageRes(req.url, res);
        emitEvent.emit("log", "server", "IMAGE", `${req.url} visited`);
      } else {
        res.statusCode = 404;
        res.setHeader(
          "Set-Cookie",
          `cookiename=server${req.url}cookie; Expires=${cookieExp}; Path=${req.url}`
        );
        router.notFoundPage(res);
        emitEvent.emit("log", "server", "WARNING", `${req.url} visited`);
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
