////////////////////////////////////////////////
//        nmmmm  mmmmm   m    m
//       #'   "    #      #  #
//       "#mmm     #       ##
//           '#    #      m""m
//       "mmm#"  mm#mm   m'  "m
////////////////////////////////////////////////
// globals
global.DEBUG = true;

////////////////////////////////////////////////
// imports
const server = require("./src/server");

////////////////////////////////////////////////
// listeners
// listening for activity on localhost:3000
server.serverSwitch.listen(3000, "localhost", () => {
  if (global.DEBUG) console.log("Listening on port 3000...");
});
