////////////////////////////////////////////////
// Imports
const fs = require("fs");
const weather = require("./weather");
const logger = require("./logger");
const events = require("events");
class Event extends events {}
const emitEvent = new Event();
const PATH = require("path");

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

const stylePage = async (path, response) => {
  if (global.DEBUG) console.log("style page requested.");
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
const displayFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      // Return a 404 error if the file is not found
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
    } else {
      // Set the appropriate content type based on the file extension
      const ext = PATH.extname(path);
      let contentType = "text/html";
      if (ext === ".css") {
        contentType = "text/css";
      }

      // Return the file with the correct content type
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
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
  stylePage,
};
