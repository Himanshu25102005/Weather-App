import React from 'react';
import { useWeather } from '../contexts/weathercontext';
import { 
    Cloud, 
    Sun, 
    Wind, 
    Droplets, 
    Eye, 
    Thermometer, 
    MapPin, 
    Calendar, 
    Clock,
    Sunrise,
    Sunset,
    Gauge,
    Activity
} from 'lucide-react';

const Weather = () => {
    const { city, weatherData } = useWeather();

    // Get current time and date
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    const currentDate = now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Function to get weather icon based on conditions
    const getWeatherIcon = () => {
        return <Sun className="w-16 h-16 text-yellow-400" />;
    };

    const getMinMaxTemp = () => {
        const minTemp = Math.round(weatherData?.temp - 2);
        const maxTemp = Math.round(weatherData?.temp + 2);
        return { minTemp, maxTemp };
    };

    const { minTemp, maxTemp } = getMinMaxTemp();

    return (
        <div className="flex items-center justify-center min-h-screen pt-16 pb-16 px-4">
            <div className="max-w-7xl w-full min-h-[80vh] flex flex-col justify-center">
                
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-2">
                        <MapPin className="w-6 h-6 text-blue-300 mr-2" />
                        <h1 className="text-3xl font-light text-white">{city}</h1>
                    </div>
                    <div className="flex items-center justify-center space-x-6 text-gray-300 text-sm">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{currentDate}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{currentTime}</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                    
                    {/* Main Temperature Card - Takes 2 columns */}
                    <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center justify-between h-full">
                            <div>
                                <div className="text-6xl font-thin text-white mb-2">
                                    {Math.round(weatherData?.temp || 0)}°
                                </div>
                                <div className="text-xl text-gray-300 mb-1">Clear Sky</div>
                                <div className="text-sm text-gray-400">
                                    Feels like {Math.round(weatherData?.feelsLikeTemp || 0)}°C
                                </div>
                                
                                {/* Min/Max in same card */}
                                <div className="flex items-center space-x-4 mt-4">
                                    <div className="flex items-center">
                                        <Sunrise className="w-4 h-4 text-orange-400 mr-1" />
                                        <span className="text-white text-sm">{minTemp}°</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Sunset className="w-4 h-4 text-orange-600 mr-1" />
                                        <span className="text-white text-sm">{maxTemp}°</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                {getWeatherIcon()}
                            </div>
                        </div>
                    </div>

                    {/* Wind Card */}
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-md rounded-2xl p-4 border border-blue-400/30">
                        <div className="flex items-center mb-2">
                            <Wind className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-white text-sm">Wind</span>
                        </div>
                        <div className="text-2xl font-light text-white">{Math.round(weatherData?.windSpeed || 0)}</div>
                        <div className="text-blue-300 text-xs">km/h</div>
                    </div>

                    {/* Humidity Card */}
                    <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/30 backdrop-blur-md rounded-2xl p-4 border border-teal-400/30">
                        <div className="flex items-center mb-2">
                            <Droplets className="w-5 h-5 text-teal-400 mr-2" />
                            <span className="text-white text-sm">Humidity</span>
                        </div>
                        <div className="text-2xl font-light text-white">{Math.round(weatherData?.precipitation || 0)}</div>
                        <div className="text-teal-300 text-xs">%</div>
                    </div>
                </div>

                {/* Secondary Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {/* Visibility */}
                    <div className="bg-white/8 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <div className="flex items-center mb-2">
                            <Eye className="w-4 h-4 text-purple-400 mr-2" />
                            <span className="text-white text-xs">Visibility</span>
                        </div>
                        <div className="text-xl font-light text-white">{Math.round(weatherData?.visibility || 0)}</div>
                        <div className="text-purple-300 text-xs">km</div>
                    </div>

                    {/* Heat Index */}
                    <div className="bg-white/8 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <div className="flex items-center mb-2">
                            <Thermometer className="w-4 h-4 text-red-400 mr-2" />
                            <span className="text-white text-xs">Heat Index</span>
                        </div>
                        <div className="text-xl font-light text-white">{Math.round(weatherData?.heatIndex || 0)}°</div>
                        <div className="text-red-300 text-xs">Celsius</div>
                    </div>

                    {/* Dew Point */}
                    <div className="bg-white/8 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <div className="flex items-center mb-2">
                            <Cloud className="w-4 h-4 text-blue-400 mr-2" />
                            <span className="text-white text-xs">Dew Point</span>
                        </div>
                        <div className="text-xl font-light text-white">{Math.round(weatherData?.dewPoint || 0)}°</div>
                        <div className="text-blue-300 text-xs">Celsius</div>
                    </div>

                    {/* Air Quality */}
                    <div className="bg-white/8 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <div className="flex items-center mb-2">
                            <Activity className="w-4 h-4 text-green-400 mr-2" />
                            <span className="text-white text-xs">Air Quality</span>
                        </div>
                        <div className="text-xl font-light text-white">Good</div>
                        <div className="text-green-300 text-xs">AQI: 45</div>
                    </div>
                </div>

                {/* Bottom Row - Additional Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white/8 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Sun className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-white text-sm mb-1">UV Index</div>
                        <div className="text-xl font-light text-white">5</div>
                        <div className="text-gray-400 text-xs">Moderate</div>
                    </div>

                    <div className="bg-white/8 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Gauge className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-white text-sm mb-1">Pressure</div>
                        <div className="text-xl font-light text-white">1013</div>
                        <div className="text-gray-400 text-xs">hPa</div>
                    </div>

                    <div className="bg-white/8 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Cloud className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-white text-sm mb-1">Cloud Cover</div>
                        <div className="text-xl font-light text-white">15</div>
                        <div className="text-gray-400 text-xs">%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;