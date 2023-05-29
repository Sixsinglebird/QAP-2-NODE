////////////////////////////////////////////////
//        nmmmm  mmmmm   m    m
//       #'   "    #      #  #
//       "#mmm     #       ##
//           '#    #      m""m
//       "mmm#"  mm#mm   m'  "m
////////////////////////////////////////////////
// globals
global.DEBUG = true;
global.STYLE = '<link rel="stylesheet" href="files/style.css" />';
global.NAV =
  '<nav><a href="/subscribe">subscribe</a><a href="/products">products</a><a href="/contact">contact</a><a href="/about">about</a>  <a href="/weather">weather</a><nav><a href="/">home</a></nav>';

////////////////////////////////////////////////
// imports
const server = require("./src/server");

////////////////////////////////////////////////
// listeners
// listening for activity on localhost:3000
server.serverSwitch.listen(3000, "localhost", () => {
  if (global.DEBUG) console.log("Listening on port 3000...");
});
