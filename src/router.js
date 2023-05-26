////////////////////////////////////////////////
// Imports
const fs = require("fs");
const weather = require("./weather");

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
const displayFile = async (path, response) => {
  await fs.readFile(path, async (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      if (DEBUG) console.log(`${path} served`);
      await response.writeHead(response.statusCode, {
        "Content-Type": "text/html",
      });
      await response.write(data);
      response.end();
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
