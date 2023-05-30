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
  response.statusCode = 200;
  index.page(response);
};

const aboutPage = (response) => {
  if (global.DEBUG) console.log("about.html requested");
  response.statusCode = 200;
  about.page(response);
};

const contactPage = (response) => {
  if (global.DEBUG) console.log("contact.html requested");
  response.statusCode = 200;
  contact.page(response);
};

const productsPage = (response) => {
  if (global.DEBUG) console.log("products.html requested");
  response.statusCode = 200;
  products.page(response);
};

const subscribePage = (response) => {
  if (global.DEBUG) console.log("subscribe.html requested");
  response.statusCode = 200;
  subscribe.page(response);
};

const stylePage = (response) => {
  if (global.DEBUG) console.log("style page requested.");
  response.statusCode = 200;
  styleSheet(response);
};

const weatherPage = (response) => {
  if (global.DEBUG) console.log("wttr.in/st_johns_canada.json requested");
  response.statusCode = 200;
  weather.conditions(response);
};

const notFoundPage = (response) => {
  if (global.DEBUG) console.log("Requested page does not exist.");
  response.statusCode = 200;
  fourOhFour.page(response);
};

const imageRes = (path, response) => {
  if (global.DEBUG) console.log("Image requested.");
  response.statusCode = 200;
  image(path, response);
};

const newsPage = (response) => {
  if (global.DEBUG) console.log("news page requested.");
  response.statusCode = 200;
  news.topStories(response);
};

////////////////////////////////////////////////
// functions
const styleSheet = (response) => {
  // .views bc stack begins at App.js
  fs.readFile("./views/files/style.css", (err, data) => {
    if (err) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("File not found");
    } else {
    }
    response.writeHead(response.statusCode, { "Content-Type": "text/css" });
    response.end(data);
  });
};

const image = (path, response) => {
  fs.readFile(`./views${path}`, (err, data) => {
    if (err) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("image not found");
    }
    response.writeHead(response.statusCode, { "Content-Type": "image/JPG" });
    response.end(data);
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
