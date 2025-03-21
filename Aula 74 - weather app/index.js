//WEATHER PROGRAM

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "2415adb49a2ae3c98aeab391f095dca4";

weatherForm.addEventListener("submit", event => {

    event.preventDefault(); // it prevents the page from refreshing after the user click the submit button

    const city = cityInput.value;

    if(city){

    }
});

async function getWeatherData(city){

}
function displayWeatherInfo(data){

}
function getWeatherEmoji(weatherId){

}
function displayError(message){

}