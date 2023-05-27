////////////////////////////////////////////////
// urls
const weatherUrl = "https://wttr.in/";

////////////////////////////////////////////////
const conditions = async (res) => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    await res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    await res.end(data);
  } catch (error) {
    res.statusCode = 500;
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// export
module.exports = { conditions };
