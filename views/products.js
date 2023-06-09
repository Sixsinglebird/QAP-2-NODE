////////////////////////////////////////////////
const page = async (res) => {
  const name = "Products";
  const style = `${global.STYLE}`;
  const head = `<head>${style}<title>${name}</title></head>`;
  const header = `<header><h1>${name}</h1>${global.NAV}</header>`;
  const display = `<div id="display"><figure><img src="./images/IMG_0062.JPG"><figcaption>Cat 4 Sale $$$</figcaption></figure><div id="hideme">just jokes</div></div>`;
  try {
    await res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    await res.end(`${head}<body>${header}${display}</body>`);
  } catch (error) {
    res.statusCode = 500;
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// exports
module.exports = { page };
