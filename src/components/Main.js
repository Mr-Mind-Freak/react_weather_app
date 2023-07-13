import React from 'react';
import { useContext } from 'react';
import Data from '../DataContext';

const Main = () => {
    const {weatherWord,weather} = useContext(Data);
    let icon = '';
    switch (weatherWord.toLowerCase()) {
      case "clouds":
      case "mist":
        icon = require("../assets/icons/cloudy-icon.png");
        break;
      case "sunny":  
      case "clear":
        icon = require("../assets/icons/clearIcon.png");
        break;
      case "drizzle":  
      case "rain":
        icon = require("../assets/icons/rainy-icon.png");
        break;
      case "fog":
      case "haze":  
      case "frosty":
      case "snow":
        icon = require("../assets/icons/snowy-icon.png");
        break;
      case "thunderstorm":
        icon = require("../assets/icons/thunderstorm-icon.png");
        break;
      default: 
        icon = require("../assets/icons/cloudy-icon.png");
        break;  
    }

  return (
    <main>
      {weather != null ? (
        <section className='result'>
          <h2>{weather.name}, <span>{weather.sys.country}</span></h2>
          <img src={icon} alt='weather icon' width={100} height={100}/>
          <div className='degrees'>
            <h3>{weatherWord}</h3>
            <p><span>{Math.round(weather.main.temp)}</span><span>{`feels like ${weather.main.feels_like}`}</span></p>
          </div>
        </section>
        )
        : <div className='noresult'>no result</div>
      }
    </main>
  )
}

export default Main;
