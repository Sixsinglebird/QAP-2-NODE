////////////////////////////////////////////////
// Imports
const fs = require("fs");
const weather = require("./weather");

////////////////////////////////////////////////
// website routes
const indexPage = (path, response) => {
  if (global.DEBUG) console.log("index.html requested");
  displayFile(path, response);
};

const aboutPage = (path, response) => {
  if (global.DEBUG) console.log("about.html requested");
  displayFile(path, response);
};

const contactPage = (path, response) => {
  if (global.DEBUG) console.log("contact.html requested");
  displayFile(path, response);
};

const productsPage = (path, response) => {
  if (global.DEBUG) console.log("products.html requested");
  displayFile(path, response);
};

const subscribePage = (path, response) => {
  if (global.DEBUG) console.log("subscribe.html requested");
  displayFile(path, response);
};

const weatherPage = (path, response) => {
  if (global.DEBUG) console.log("wttr.in/st_johns_canada.json requested");
  weather.conditions(response);
  displayFile(path, response);
};

const notFoundPage = (path, response) => {
  if (global.DEBUG) console.log("Requested page does not exist.");
  displayFile(path, response);
};

////////////////////////////////////////////////
// functions
const displayFile = (path, response) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      if (DEBUG) console.log(`${path} served`);
      response.writeHead(response.statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end("");
    }
  });
};

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
