////////////////////////////////////////////////
// Imports
const weather = require("../views/weather");
const index = require("../views/index");
const fourOhFour = require("../views/fourOhFour");
const subscribe = require("../views/subscribe");
const products = require("../views/products");
const about = require("../views/about");
const contact = require("../views/contact");
const news = require("../views/news");
const logger = require("./logger");
const events = require("events");
class Event extends events {}
const emitEvent = new Event();
const fs = require("fs");

////////////////////////////////////////////////
// website routes
const indexPage = (response) => {
  if (global.DEBUG) console.log("index.html requested");
  index.page(response);
};

const aboutPage = (response) => {
  if (global.DEBUG) console.log("about.html requested");
  about.page(response);
};

const contactPage = (response) => {
  if (global.DEBUG) console.log("contact.html requested");
  contact.page(response);
};

const productsPage = (response) => {
  if (global.DEBUG) console.log("products.html requested");
  products.page(response);
};

const subscribePage = (response) => {
  if (global.DEBUG) console.log("subscribe.html requested");
  subscribe.page(response);
};

const stylePage = (response) => {
  if (global.DEBUG) console.log("style page requested.");
  styleSheet(response);
};

const weatherPage = (response) => {
  if (global.DEBUG) console.log("wttr.in/st_johns_canada.json requested");
  weather.conditions(response);
};

const notFoundPage = (response) => {
  if (global.DEBUG) console.log("Requested page does not exist.");
  fourOhFour.page(response);
};

const imageRes = (path, response) => {
  if (global.DEBUG) console.log("Image requested.");
  image(path, response);
};

const newsPage = (response) => {
  if (global.DEBUG) console.log("news page requested.");
  news.topStories(response);
};

////////////////////////////////////////////////
// functions
const styleSheet = (res) => {
  // .views bc stack begins at App.js
  fs.readFile("./views/files/style.css", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
    } else {
    }
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(data);
  });
};

const image = (path, res) => {
  fs.readFile(`./views${path}`, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("image not found");
    }
    res.writeHead(200, { "Content-Type": "image/JPG" });
    res.end(data);
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
  imageRes,
  newsPage,
};
