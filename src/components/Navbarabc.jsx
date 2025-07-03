import React, { useState } from "react";
import { useWeather } from "../contexts/weathercontext";

const Navbarabc = () => {
  const { handleCitySubmit } = useWeather();
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() !== "") {
      handleCitySubmit(userInput);
      setUserInput("");
    }
  };

  return (
    <nav className="bg-blue-900 h-14 text-white px-4 py-3 flex items-center justify-between">
      {/* Left side - Back button and title */}
      <div className="flex items-center space-x-3">
        <button className="p-1 hover:bg-blue-700 rounded transition-colors">
          <i className="ri-arrow-left-line text-2xl"></i>
        </button>
        <h1 className="text-3xl font-medium">Forecast</h1>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center space-x-1">
        {/*  <button className="p-2 hover:bg-blue-700 rounded transition-colors">
          <i className="ri-star-line text-xl"></i>
        </button>
        <button className="p-2 hover:bg-blue-700 rounded transition-colors">
          <i className="ri-share-line text-xl"></i>
        </button>
        <button className="p-2 hover:bg-blue-700 rounded transition-colors">
          <i className="ri-more-line text-xl"></i>
        </button> */}

        {/* Search section */}
        <div className="flex items-center ml-2">
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="   City or ZIP Code" value={userInput}
            onChange={(e) => {setUserInput(e.target.value)}}
            className=" bg-gray-800 placeholder-blue-200 text-white px-4 py-2 rounded-l text-base border-none outline-none focus:bg-blue-400 transition-colors w-100 h-10.5"
          />
          <button className="bg-gray-800 hover:bg-blue-400 p-2 rounded-r h-10 w-20 transition-colors">
            <i className="ri-search-line text-lg"></i>
          </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbarabc;
