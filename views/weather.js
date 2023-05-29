////////////////////////////////////////////////
// urls
const weatherUrl = "https://wttr.in/";

////////////////////////////////////////////////
const conditions = async (res) => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    const name = "weather";
    const style = `<style>
    ${global.STYLE}
    </style>`;
    const head = `<head>${style}<title>${name}</title></head>`;
    const header = `<header><h1>${name}</h1>${global.NAV}</header>`;
    await res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    await res.end(`${head}<body>${header}<div id="data">${data}</div></body>`);
  } catch (error) {
    res.statusCode = 500;
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// export
module.exports = { conditions };
