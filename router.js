////////////////////////////////////////////////
// Imports
const fs = require("fs");

////////////////////////////////////////////////
// Routes
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
  if (global.DEBUG) console.log("subscribe.html resquested");
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

module.exports = {
  indexPage,
  aboutPage,
  contactPage,
  productsPage,
  subscribePage,
};
