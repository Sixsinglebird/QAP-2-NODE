////////////////////////////////////////////////
// urls
const weatherUrl = "https://wttr.in/";

////////////////////////////////////////////////
const conditions = async (res) => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    await res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    await res.end(
      "<head><title>NFLD Weather</title><style>* {margin: 0;padding: 0;}header {display: flex;max-width: 100%;}header nav {margin-left: auto;}</style></head><body><header><h1>Sixsinglebird</body></header></h1>" +
        data
    );
  } catch (error) {
    res.statusCode = 500;
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// export
module.exports = { conditions };
