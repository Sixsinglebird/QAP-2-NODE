////////////////////////////////////////////////
// Imports
const fs = require("fs");
const weather = require("../views/weather");
const index = require("../views/index");
const fourOhFour = require("../views/fourOhFour");
const subscribe = require("../views/subscribe");
const products = require("../views/products");
const about = require("../views/about");
const contact = require("../views/contact");
const logger = require("./logger");
const events = require("events");
class Event extends events {}
const emitEvent = new Event();
const PATH = require("path");

////////////////////////////////////////////////
// website routes
const indexPage = async (response) => {
  if (global.DEBUG) console.log("index.html requested");
  await index.page(response);
};

const aboutPage = async (response) => {
  if (global.DEBUG) console.log("about.html requested");
  await about.page(response);
};

const contactPage = async (response) => {
  if (global.DEBUG) console.log("contact.html requested");
  await contact.page(response);
};

const productsPage = async (response) => {
  if (global.DEBUG) console.log("products.html requested");
  await products.page(response);
};

const subscribePage = async (response) => {
  if (global.DEBUG) console.log("subscribe.html requested");
  await subscribe.page(response);
};

const stylePage = async (path, response) => {
  if (global.DEBUG) console.log("style page requested.");
  await displayFile(path, response);
};

const weatherPage = async (response) => {
  if (global.DEBUG) console.log("wttr.in/st_johns_canada.json requested");
  await weather.conditions(response);
};

const notFoundPage = async (response) => {
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
