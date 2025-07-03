
![Awesome ReadME](https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024)

# 🌤️ React Weather Forecast App 

[![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/navendu-pottekkat/awesome-readme?include_prereleases)](https://img.shields.io/github/v/release/navendu-pottekkat/awesome-readme?include_prereleases)
[![GitHub last commit](https://img.shields.io/github/last-commit/navendu-pottekkat/awesome-readme)](https://img.shields.io/github/last-commit/navendu-pottekkat/awesome-readme)
[![GitHub issues](https://img.shields.io/github/issues-raw/navendu-pottekkat/awesome-readme)](https://img.shields.io/github/issues-raw/navendu-pottekkat/awesome-readme)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/navendu-pottekkat/awesome-readme)](https://img.shields.io/github/issues-pr/navendu-pottekkat/awesome-readme)
[![GitHub](https://img.shields.io/github/license/navendu-pottekkat/awesome-readme)](https://img.shields.io/github/license/navendu-pottekkat/awesome-readme)

:

🌤️ React Weather Forecast App is a modern and responsive weather app built using ⚛️ React.js, ⚡ Vite, and 🎨 Tailwind CSS. It allows users to search for any city 🌍 and fetches real-time weather data ☁️🌧️☀️ using the Google Geocoding API and Google Weather API.

With a beautiful UI and dynamic styling based on weather conditions, the app displays key information such as:

🌡️ Temperature & Feels-like

💨 Wind Speed

👁️ Visibility

🌧️ Precipitation

🧭 Coordinates

The app uses React Context API for global state management, making data sharing across components seamless. This project is a great showcase of modern frontend development, efficient API handling, and clean UI design. 🚀



# Quick Start Demo

![Demo Preview](https://github.com/Himanshu25102005/Weather-App/blob/main/screenshot/Screenshot%20(1104).png?raw=true)


Captured at 12:10 PM IST, Thursday, July 03, 2025, this screenshot showcases the Spoidermon Weather App in action. The interface features a stunning purple gradient background 🌌, setting a modern and vibrant tone. The top navigation bar 💼 displays "Forecast" on the left, with a sleek search bar 📍 on the right, inviting users to input a "City or ZIP Code" for weather updates.

The central section 🌐 highlights the current location (currently "NaN" 🕒, indicating a pending city input) with a timestamp of "Thursday, July 3, 2025, 05:48 AM" and a "Wind" label. Surrounding it are modular weather cards:





🌡️ Temperature Card: Displays "0°" with a "Clear Sky" condition ☀️, "Feels like 0°C," and "Visibility 0 km" (labeled "NaN"), plus a "UV Index" of "5 (Moderate)" with an orange sun icon 🌞.



💧 Humidity Card: Shows "0%" with a green leaf icon 🍃.



🌬️ Wind Card: Indicates "0 km/h" with a yellow sun icon ☀️.



🌫️ Air Quality Card: Marks "Good" with an AQI of "45" and a green checkmark ✅.



☁️ Cloud Cover Card: Reveals "15%" with a purple cloud icon 🌥️.



🔥 Heat Index Card: Notes "0° Celsius" with a flame icon 🔥.



💧 Dew Point Card: Registers "0° Celsius" with a purple droplet icon 💧.



📊 Pressure Card: Lists "1013 hPa" with a blue gauge icon 📉.

Each card boasts a semi-transparent design with white text 🎨, ensuring readability against the purple backdrop, making the app both functional and visually appealing. Perfect for tracking weather on the go! 🚀

# Table of Contents

This is a table of contents for your project. It helps the reader navigate through the README quickly.
- [Project Title](#project-title)
- [Quick Start Demo](#quick-start-demo)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
- [License](#license)


# Installation
[(Back to top)](#table-of-contents)

## 🛠️ Installation & Setup

Follow these steps to run the project locally on your machine:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/spoidermon.git

# 2️⃣ Navigate into the project folder
cd spoidermon

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create a .env file in the root directory and add your API keys
# (Use your own API keys — do not expose them publicly)
VITE_GEOCODING_API_KEY=your_google_geocoding_api_key
VITE_WEATHER_API_KEY=your_google_weather_api_key

# 5️⃣ Start the development server
npm run dev



# Usage
[(Back to top)](#table-of-contents)

## 🚀 Usage

Using the Weather Forecast App is simple and intuitive:

1. 🔍 **Search a City**  
   Type any city name into the search bar located in the navigation bar (e.g., "Mumbai", "Tokyo", "New York").

2. 🧭 **Geolocation Fetching**  
   The app uses the **Google Geocoding API** to convert the city name into geographic coordinates (latitude & longitude).

3. 🌤️ **Live Weather Data Retrieval**  
   Using those coordinates, the app makes a request to the **Google Weather API** to fetch real-time weather data.

4. 📊 **Display Weather Information**  
   Instantly view detailed weather stats including:
   - 🌡️ Temperature & Feels Like
   - 💨 Wind Speed
   - 👁️ Visibility
   - 🔥 Heat Index
   - 🌧️ Precipitation

5. 🎨 **Dynamic Styling**  
   The background color and UI elements update based on the weather condition (e.g., Clear, Rainy, Cloudy).

6. 📱 **Fully Responsive UI**  
   The layout adjusts beautifully on desktop, tablet, and mobile devices.

---




# Development
[(Back to top)](#table-of-contents)

## 🧑‍💻 Development

This project follows modern React development practices using **Vite**, **Tailwind CSS**, and the **Context API**. Here's an overview of how the app is structured and how it works under the hood:

### 🏗️ Project Architecture

- **React + Vite**: Fast bundling and hot-reload for smooth development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Context API**: Centralized state management for city input, coordinates, and weather data.
- **Modular Components**: Separation of concerns using components like `Navbar`, `Weather`, and reusable API handlers.

### 🔁 Data Flow

1. **User Input (Navbar)**
   - City is entered by the user in a form inside `Navbarabc.jsx`.

2. **Coordinate Fetching**
   - `geocodeAPI.jsx` takes the city and returns its latitude and longitude using the **Google Geocoding API**.

3. **Weather Fetching**
   - `weatherAPI.jsx` uses the coordinates to fetch weather details using the **Google Weather API**.

4. **Global State (Context)**
   - `weathercontext.jsx` stores city, coordinates, and weather data.
   - This data is accessible throughout the app using a custom hook `useWeather()`.

5. **Rendering (Weather.jsx)**
   - The UI is dynamically updated based on the context-provided weather data.
   - Conditional rendering and optional chaining (`?.`) are used to avoid crashes on first load.

### 🧪 Environment Variables

All API keys are stored securely in a `.env` file using `VITE_` prefix so they are exposed correctly to the frontend via `import.meta.env`.

```env
VITE_GEOCODING_API_KEY=your_geocoding_api_key
VITE_WEATHER_API_KEY=your_weather_api_key



# Contribute
[(Back to top)](#table-of-contents)

## 🤝 Contribute

Contributions are welcome!  
If you find a bug, have a feature request, or want to improve the UI/UX, feel free to fork the repo and submit a pull request.




# License
[(Back to top)](#table-of-contents)

## 📃 License

This project is licensed under the **MIT License** 📝.  
You are free to use, modify, and distribute this project for personal or commercial purposes — just give proper credit! 🙌

For full details, see the [LICENSE](LICENSE) file.


