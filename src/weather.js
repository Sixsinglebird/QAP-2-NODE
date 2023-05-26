////////////////////////////////////////////////
// urls
const weatherUrl = "https://wttr.in/";

////////////////////////////////////////////////
const conditions = async (res) => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    // write to the head of the file what the content type is
    await res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    // write our page data
    await res.write(data);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// export
module.exports = { conditions };
