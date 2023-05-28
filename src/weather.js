////////////////////////////////////////////////
// urls
const weatherUrl = "https://wttr.in/";

////////////////////////////////////////////////
const conditions = async (res) => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    const nav = '<nav><a href="/">home</a></nav>';
    const styles = `
    * {
      margin: 0;padding: 0;
    }
    header {
      display: flex;max-width: 100%;
    }
    header nav {
      margin-left: auto;
    }
    a:hover {
      color: blue;
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }`;
    const style = `<style>${styles}</style>`;
    const head = `<head>${style}<title>NFLD Weather</title></head>`;
    const header = `<header><h1>Sixsinglebird</h1>${nav}</header>`;
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
