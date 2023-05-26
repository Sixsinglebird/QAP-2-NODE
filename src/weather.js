////////////////////////////////////////////////
// urls
const weatherUrl = "https://wttr.in/";

////////////////////////////////////////////////
// imports

////////////////////////////////////////////////
const conditions = async () => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// export
conditions();
