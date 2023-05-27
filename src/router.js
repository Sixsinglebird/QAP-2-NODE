////////////////////////////////////////////////
// Imports
const fs = require("fs");
const weather = require("./weather");
const logger = require("./logger");
const events = require("events");
class Event extends events {}
const emitEvent = new Event();

////////////////////////////////////////////////
// website routes
const indexPage = async (path, response) => {
  if (global.DEBUG) console.log("index.html requested");
  await displayFile(path, response);
};

const aboutPage = async (path, response) => {
  if (global.DEBUG) console.log("about.html requested");
  await displayFile(path, response);
};

const contactPage = async (path, response) => {
  if (global.DEBUG) console.log("contact.html requested");
  await displayFile(path, response);
};

const productsPage = async (path, response) => {
  if (global.DEBUG) console.log("products.html requested");
  await displayFile(path, response);
};

const subscribePage = async (path, response) => {
  if (global.DEBUG) console.log("subscribe.html requested");
  await displayFile(path, response);
};

const weatherPage = async (response) => {
  if (global.DEBUG) console.log("wttr.in/st_johns_canada.json requested");
  await weather.conditions(response);
};

const notFoundPage = async (path, response) => {
  if (global.DEBUG) console.log("Requested page does not exist.");
  await displayFile(path, response);
};

////////////////////////////////////////////////
// functions
const displayFile = (path, response) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      emitEvent.emit("log", "router", "ERROR", err);
      console.log(err);
    } else {
      if (DEBUG) console.log(`${path} accessed`);
      response.writeHead(response.statusCode, {
        "Content-Type": "html",
      });
      response.end(data);
    }
  });
};

////////////////////////////////////////////////
// listener
emitEvent.on("log", (event, level, message) => {
  if (global.DEBUG) logger.logEvent(event, level, message);
});

////////////////////////////////////////////////
// export
module.exports = {
  indexPage,
  aboutPage,
  contactPage,
  productsPage,
  subscribePage,
  notFoundPage,
  weatherPage,
};
