////////////////////////////////////////////////
// urls
const weatherUrl = "https://wttr.in/";

////////////////////////////////////////////////
<<<<<<< HEAD
// imports

////////////////////////////////////////////////
const conditions = async () => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    console.log(data);
=======
const conditions = async (res) => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    // write to the head of the file what the content type is
    res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    // write our page data
    res.write(data);
>>>>>>> parent of 4b38ccf (commit)
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// export
module.exports = { conditions };
