import React from 'react'
import Navbarabc from './components/Navbarabc'
import Weather from './components/Weather'
import { WeatherProvider } from './contexts/weathercontext'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-900 via-gray-800 to-black-900">
      <WeatherProvider>
        <Navbarabc />
        <Weather />
      </WeatherProvider>
    </div>
  )
}

export default App