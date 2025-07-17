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

const forecastItemsContainer = document.querySelector(".forecast-items-container");




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
    const BaseURL = `https://api.openweathermap.org/data/2.5/${EndPoint}?q=${city}&appid=${APIKey}&units=metric`;
    const response = await fetch(BaseURL)
    return response.json();

}

function getWeatherIcon(id) {
    if (id >= 200 && id <= 232) {
        return 'thunderstorm.svg';
    } else if (id >= 300 && id <= 321) {
        return 'drizzle.svg';
    } else if (id >= 500 && id <= 531) {
        return 'rain.svg';
    } else if (id >= 600 && id <= 622) {
        return 'snow.svg';
    } else if (id >= 701 && id <= 781) {
        return 'atmosphere.svg';
    } else if (id === 800) {
        return 'clear.svg';
    } else if (id >= 801 && id <= 804) {
        return 'clouds.svg';
    } else {
        return 'unknown.svg'; // fallback icon
    }
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
    humidityValueTxt.textContent = humidity + ' %';
    windValueTxt.textContent = speed + ' M/s';
    currentDataTxt.textContent = new Date().toLocaleString('en-us', { weekday:"long", month:"long", day:"numeric" });
    weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`;



    await updateForecastsInfo(city);

    showDisplaySection(weatherInfoSection);
}

async function updateForecastsInfo(city)
{
const forecastsData = await getFetchData('forecast', city);

    const timeTaken = '12:00:00';
    const todayDate = new Date().toISOString().split('T')[0];

    forecastItemsContainer.innerHTML = " ";
    forecastsData.list.forEach(forecastWeather => {
        if(forecastWeather.dt_txt.includes(timeTaken) && !forecastWeather.dt_txt.includes(todayDate))
        {
            updateForecastItems(forecastWeather);
        }
    });
}

function updateForecastItems(weatherData)
{
    console.log(weatherData);
    const {
        dt_txt: date,
        weather: [{ id }],
        main: { temp }
    } = weatherData;

    const dataTaken = new Date(date)
    const dateOptions = {day: '2-digit', month: 'short'};
    const dateResult = dataTaken.toLocaleDateString('en-US',dateOptions);


    const forecastItem = `
    <div class="forecast-item">
        <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
        <img src="assets/weather/${getWeatherIcon(id)}" class="forecast-item-img">
        <h5 class="forecast-item-temp">${Math.round(temp)} °C</h5>
    </div>
    `

    forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem)
}
function showDisplaySection(section)
{
    [weatherInfoSection, searchCitySection, notFoundSection]
    .forEach(section => section.style.display = 'none');
    section.style.display = 'flex';
};


