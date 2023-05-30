////////////////////////////////////////////////
// urls
const newsUrl =
  "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=";

////////////////////////////////////////////////
const topStories = async (res) => {
  try {
    const name = "News";
    const style = `${global.STYLE}`;
    const head = `<head>${style}<title>${name}</title></head>`;
    const header = `<header><h1>${name}</h1>${global.NAV}</header>`;
    res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    res.write(head);
    res.write(`<body>${header}`);
    await fetch(newsUrl + "fdkTdsLlcTc8EdQVdMmSxONIYuWeDaFL")
      .then(async (res) => await res.json())
      .then(async (data) => await res.write(data));
    res.end(`</body>`);
  } catch (error) {
    res.statusCode = 500;
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// export
module.exports = { topStories };
