const cityInput = document.querySelector('.city-input');
const searchButton = document.querySelector('.search-btn');

const notFoundSection = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');

const weatherInfoSection = document.querySelector('.weather-info');
const weatherDataSection = document.querySelector('.weather-data');

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

    

    showDisplaySection(weatherInfoSection);
}

function showDisplaySection(section)
{
    [weatherInfoSection, searchCitySection, notFoundSection]
    .forEach(section => section.style.display = 'none');
    section.style.display = 'flex';
};