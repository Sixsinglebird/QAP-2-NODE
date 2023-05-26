////////////////////////////////////////////////
// urls
const weatherUrl = "https://wttr.in/";

////////////////////////////////////////////////
const conditions = async () => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.text();
    const weatherConditionsDiv = document.getElementById("#weatherConditions");
    weatherConditionsDiv.innerHTML = data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

////////////////////////////////////////////////
// export
conditions();
