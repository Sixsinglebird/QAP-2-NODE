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

const weatherPage = async (response) => {
  if (global.DEBUG) console.log("wttr.in/st_johns_canada.json requested");
  await weather.conditions(response);
};

const notFoundPage = async (response) => {
  if (global.DEBUG) console.log("Requested page does not exist.");
  await fourOhFour.page(response);
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
