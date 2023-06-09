////////////////////////////////////////////////
const page = async (res) => {
  const name = "Page not found";
  const style = `${global.STYLE}`;
  const head = `<head>${style}<title>${name}</title></head>`;
  const header = `<header><h1>this is not the page you are looking for <br />
  **waves hand**</h1>${global.NAV}</header>`;
  try {
    await res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    await res.end(`${head}<body>${header}</body>`);
  } catch (error) {
    res.statusCode = 500;
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// exports
module.exports = { page };
