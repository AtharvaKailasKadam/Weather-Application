const cityInput = document.querySelector('.city-input');
const searchButton = document.querySelector('.search-btn');

const notFoundSection = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');

const weatherInfoSection = document.querySelector('.weather-info');
const weatherDataSection = document.querySelector('.weather-data');


const countryTxt = document.querySelector('.country-txt');
const tempTxt = document.querySelector('.temp-txt');
const conditionTxt = document.querySelector('.condition-txt');
const humidityValueTxt = document.querySelector('.humidity-value-txt');
const windValueTxt = document.querySelector('.wind-value-txt');
const weatherSummaryImg = document.querySelector('.weather-summary-img');
const currentDataTxt = document.querySelector('.current-data-txt');




const APIKey = 'f6d2b6ecb612a80295a90b084490a7d3';


// Merging the search button and input field functionality
searchButton.addEventListener('click', () => {
    if (cityInput.value !== "")
    {
        updateWeatherInfo(cityInput);
        cityInput.value = "";
        cityInput.blur();
    }
});

cityInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' &&
        cityInput.value !== "")
        {
        updateWeatherInfo(cityInput.value);
        cityInput.value = "";
        cityInput.blur();
        }
});

async function getFetchData(EndPoint , city)
{
    const BaseURL = `https://api.openweathermap.org/data/2.5/${EndPoint}?q=${cityInput.value}&appid=${APIKey}&units=metric`;

    const response = await fetch(BaseURL)
    return response.json();

}


async function updateWeatherInfo(city)
{
    const weatherData = await getFetchData('weather', city);
    if(weatherData.cod != 200)
    {
        showDisplaySection(notFoundSection);
        alert("City not found. Please try again.");
        return;
    }
    console.log(weatherData);

    const
    {
        name: country,
        main: { temp, humidity},
        weather: [{ id, main }],
        wind: { speed },
    } = weatherData

    countryTxt.textContent = country;
    tempTxt.textContent = Math.round(temp) + ' °C';
    conditionTxt.textContent = main;
    humidityValueTxt.textContent = humidity;
    windValueTxt.textContent = speed;
    currentDataTxt.textContent = new Date().toLocaleString('en-us', { weekday:"long", month:"long", day:"numeric" });
    weatherSummaryImg



    showDisplaySection(weatherInfoSection);
}

function showDisplaySection(section)
{
    [weatherInfoSection, searchCitySection, notFoundSection]
    .forEach(section => section.style.display = 'none');
    section.style.display = 'flex';
};