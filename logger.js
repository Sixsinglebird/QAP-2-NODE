////////////////////////////////////////////////
const logger = async (event, level, message) => {
  const logItem = `${level}\t${event}\t${message}`;
  console.log(logItem);
};

module.exports = { logger };
