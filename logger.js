////////////////////////////////////////////////
// imports
// creates a unique identifier for each user
const { v4: uuid } = require("uuid");
const { format, getYear, getMonth } = require("date-fns");
const fs = require("fs");
const promise = require("fs").promises;
const path = require("path");

////////////////////////////////////////////////
// function used to log events.
const logEvent = async (event, level, message) => {
  // format does make it more legible
  const date = format(new Date(), "HH:mm:ss");
  const logItem = `${uuid()}\t${date}\t${level}\t${event}\t${message}`;
  if (DEBUG) console.log(logItem);
  try {
    const logDir =
      "logs/" + getYear(new Date()) + "/" + getMonth(new Date()) + "/";
    if (!fs.existsSync(path.join(__dirname, logDir))) {
      // this is fun... without the method {recursive: true }
      //  mkdir will not create nested loops
      if (DEBUG) console.log("Directory made");
      await promise.mkdir(path.join(__dirname, logDir), { recursive: true });
    }
    const file = `${format(new Date(), "dd")}_http_events.log`;
    await promise.appendFile(
      path.join(__dirname, logDir, file),
      logItem + "\n"
    );
    if (DEBUG) console.log("Event logged.");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  logEvent,
};
