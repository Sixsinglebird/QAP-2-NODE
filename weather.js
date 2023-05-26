const weatherUrl = "https://wttr.in/st_johns_canada.json";
const conditions = async (res) => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    res.write(data);
    res.end("");
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = { conditions };
