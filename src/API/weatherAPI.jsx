import getCord from "./geocodeAPI";
const key = import.meta.env.VITE_API_KEY;

const getWeatherInfo = async (lat, lng) => {

    try {
        const url = `https://weather.googleapis.com/v1/currentConditions:lookup?key=${key}&location.latitude=${lat}&location.longitude=${lng}`

        const response = await fetch(url);
        const data = await response.json();

        const temp = data.temperature.degrees;
        const feelsLikeTemp = data.feelsLikeTemperature.degrees;
        const windSpeed = data.wind.speed.value;
        const heatIndex = data.heatIndex.degrees;
        const visibility = data.visibility.distance;
        const precipitation = data.precipitation.probability.percent;
        const dewPoint = data.dewPoint.degrees;

        return { temp, feelsLikeTemp, windSpeed, heatIndex, visibility, precipitation, dewPoint }
    } catch (error) {
        console.log(error);
        throw error
    }

}

export default getWeatherInfo;