import { createContext, useState, useEffect} from 'react';

const Data = createContext({});

const extractDate = (date) => {
  let today = {};
  today.date = date.getDate();
  switch (date.getDay()) {
    case 0:
      today.day = 'Monday';
      break;
    case 1:
      today.day = 'Tuesday';
      break;
    case 2:
      today.day = 'Wednesday';
      break;
    case 3:
      today.day = 'Thursday';
      break;
    case 4:
      today.day = 'Friday';
      break;
    case 5:
      today.day = 'Saturday';
      break;
    case 6:
      today.day = 'Sunday';
      break;
    default:
      today.day = 'Sunday';
      break;
  }
  switch (date.getMonth()) {
    case 0:
      today.month = 'January'
      break;
    case 1:
      today.month = 'February'
      break;
    case 2:
      today.month = 'March'
      break;
    case 3:
      today.month = 'April'
      break;
    case 4:
      today.month = 'May'
      break;
    case 5:
      today.month = 'June'
      break;
    case 6:
      today.month = 'July'
      break;
    case 7:
      today.month = 'Auguest'
      break;
    case 8:
      today.month = 'Semptember'
      break;
    case 9:
      today.month = 'October'
      break;
    case 10:
      today.month = 'November'
      break;
    case 11:
      today.month = 'December'
      break;
    default:
      today.month = 'Auguest'
      break;
  }
  today.year = date.getFullYear();
  return today;
}

export const DataProvider = ({ children}) => {
  let [ location, setLocation] = useState('Delhi');
  const [ weatherData, setWeatherData ] = useState({});
  let [ temp, setTemp ] = useState(0);
  let [ date, setDate] = useState(new Date());
  const [ wind, setWind ] = useState(10);
  const [ humidity, setHumidity ] = useState(40);
  const [ weather, setWeather ] = useState('clear');
  const [ iconpath, setIconpath ] = useState(require('./assets/clear.png'));
  const [showModal, setShowModal] = useState(false);

  const url = {
    key : "5426b661aa9ed513a01f917a84f5b6be",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const extractIcon = (wid) => {
    switch (wid) {
      case '11d':
        setIconpath(require('./assets/thunder.png'));
        break;
      case '09d':
        setIconpath(require('./assets/drizzle.png'));
        break;
      case '10d':
        setIconpath(require('./assets/rain.png'));
        break;
      case '13d':
        setIconpath(require('./assets/snow.png'));
        break;
      case '50d':
        setIconpath(require('./assets/haze.png'));
        break;
      case '01d':
      case '01n':
        setIconpath(require('./assets/clear.png'));
        break;
      case '02d':
      case '02n':
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        setIconpath(require('./assets/cloud.png'));
        break;
      default:
        setIconpath(require('./assets/clear.png'));
        break;
    }
  }

  const fetchData = async() =>{
    try {
      const res = await fetch(`${url.base}weather?q=${location}&units=metric&APPID=${url.key}`);
      const data = await res.json();
      setWeatherData(data);
      setTemp(Math.round(data.main.temp));
      setWind(Math.ceil(data.wind.speed));
      setHumidity(data.main.humidity);
      setWeather(data.weather[0].main);
      extractIcon(data.weather[0].icon);
    } catch (error) {
      console.error(error.stack);
      setShowModal(true);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const handleInput = ( event ) => {
    if ( event.key === 'Enter') {
      fetchData();
    }
  }

  return(
    <Data.Provider value={{
      location, setLocation, temp, date, extractDate, wind, humidity, weather, iconpath, weatherData, handleInput,showModal, setShowModal
    }}>
      {children}
    </Data.Provider>
  )
}

export default Data;