# Weather-Application
🌦️ Weather Web Page A simple and responsive weather app built with HTML, CSS, and JavaScript. It uses a public API to display real-time weather details like temperature, humidity, and wind speed based on user input.

# 🌤️ Weather Application

A modern, responsive weather web app built with **HTML**, **CSS**, and **JavaScript**, that uses the **OpenWeatherMap API** to fetch and display real-time weather data along with a 3-day forecast. Inspired by [this YouTube tutorial](https://www.youtube.com/watch?v=krUdJ87uxXc&t=1269s).

---

## 🖥️ Tech Stack

- **Languages:**  
  ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)  
  ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)  
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **API:**  
  [OpenWeatherMap API](https://openweathermap.org/api)  
  - `/weather?q={city}&appid={APIKey}&units=metric`
  - `/forecast?q={city}&appid={APIKey}&units=metric`

---

## 📦 Features

- 🔍 City-based weather search
- 🌡️ Real-time weather (temperature, humidity, wind speed)
- ⛅ Weather description with icons
- 📅 3-day forecast (filtered for `12:00 PM` data)
- ❌ Error handling for invalid cities
- 🧊 Modern glassmorphism UI
- 🎯 Fully responsive and keyboard-friendly (Enter key support)

---

## 📂 Folder Structure

Weather-Application/
├── index.html # HTML structure
├── style.css # Styling with gradients and blur
├── app.js # Core logic for fetching & updating weather
└── assets/
├── Background.jpg # Animated gradient nature background
├── message/
│ ├── search-city.png # Search prompt illustration
│ └── not-found.png # City not found graphic
└── weather/
├── clear.svg
├── clouds.svg
├── drizzle.svg
├── rain.svg
├── snow.svg
├── thunderstorm.svg
├── atmosphere.svg
└── unknown.svg


---

## 🛠️ How It Works

### 🔗 API Integration

- Calls are made to OpenWeatherMap’s `/weather` and `/forecast` endpoints.
- Temperature, humidity, wind speed, and condition codes are extracted and rendered.
- Forecast data is filtered to only show `"12:00:00"` entries, excluding today's date.

### 🧠 JavaScript Highlights

- `updateWeatherInfo(city)` fetches and updates the main UI.
- `updateForecastsInfo(city)` filters and displays the next 3 midday forecasts.
- `getWeatherIcon(id)` maps weather codes to the appropriate SVG icons.
- Icons are rendered based on condition code ranges:
  ```js
  200–232 → thunderstorm.svg
  300–321 → drizzle.svg
  500–531 → rain.svg
  600–622 → snow.svg
  701–781 → atmosphere.svg
  800 → clear.svg
  801–804 → clouds.svg
  else → unknown.svg

🧪 How to Use
Clone the repository:

bash
Copy
Edit
git clone https://github.com/AtharvaKailasKadam/Weather-Application.git
cd Weather-Application
Add your OpenWeatherMap API Key
In app.js, replace:

js
Copy
Edit
const API_KEY = "your_api_key_here";
Open index.html in your browser.
Search any city and press Enter or click the search icon.

🎨 UI/UX Highlights
📱 Responsive layout
🧊 Glassmorphism design with blur and rounded borders
🌈 Animated background using gradient image
⌨️ Keyboard and mouse-friendly interactions

🎥 Based On
This project is built by following the tutorial video from YouTube:
📺 Weather App Tutorial by @OnlineTutorialsYT

⚠️ Notes
Ensure internet connection is active for API fetches.
Forecasts are timezone-sensitive and may not exactly match your local noon.
API key must remain private in production environments (use .env or secured storage).

🚀 Deployment
This app is static and can be deployed easily on:
GitHub Pages
Netlify
Vercel

📬 Contact
Atharva Kailas Kadam
🔗 GitHub Profile AtharvaKailasKadam
