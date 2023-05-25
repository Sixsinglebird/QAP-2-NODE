////////////////////////////////////////////////
// Imports
const fs = require("fs");

////////////////////////////////////////////////
// Routes
const indexPage = (path, response) => {
  if (global.DEBUG) console.log("index.html requested");
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
      if (DEBUG) console.log("file served");
      response.writeHead(response.statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
};

module.exports = {
  indexPage,
};
