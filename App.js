////////////////////////////////////////////////
//        nmmmm  mmmmm   m    m
//       #'   "    #      #  #
//       "#mmm     #       ##
//           '#    #      m""m
//       "mmm#"  mm#mm   m'  "m
////////////////////////////////////////////////
// constants
const pages = { subscribe };
////////////////////////////////////////////////
// globals
global.DEBUG = true;
global.STYLE = `
* {
  margin: 0;padding: 0;
}
header {
  display: flex;max-width: 100%;
}
header nav {
  margin-left: auto;
  display: flex;
}
nav a {
  margin: 16px 16px 0 0;
}
a:hover {
  color: blue;
  cursor: pointer;
}
a {
  text-decoration: none;
}`;

global.NAV =
  '<nav><a href="/subscribe">subscribe</a><a href="/products">products</a><a href="/contact">contact</a><a href="/about">about</a>  <a href="/weather">weather</a><nav><a href="/">home</a></nav> </nav>';

////////////////////////////////////////////////
// imports
const server = require("./src/server");

////////////////////////////////////////////////
// functions

////////////////////////////////////////////////
// listeners
// listening for activity on localhost:3000
server.serverSwitch.listen(3000, "localhost", () => {
  if (global.DEBUG) console.log("Listening on port 3000...");
});
