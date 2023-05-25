const logEvents = async (event, level, message) => {
  if (event.level === "Error") {
    console.log(new Date(), level, message);
  }
};

module.exports = { logEvents };
