import { createContext, useState} from 'react';

const Data = createContext({});

export const DataProvider = ({ children}) => {
  let [ location, setlocation] = useState('');
  let [ weather, setweather ] = useState(null);
  let [ weatherWord, setWeatherWord] = useState('normal');
  const url = {
    key : "5426b661aa9ed513a01f917a84f5b6be",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const collectData = async ( event ) => {
    if ( event.key === 'Enter') {
      try {
        const responce = await fetch(`${url.base}weather?q=${location}&units=metric&APPID=${url.key}`);
        const result = await responce.json();
        setweather(result);
        setWeatherWord(result.weather[0].main);
        setlocation("");
      }
      catch (err) {
        window.alert("Invalid Location....Please enter correct location");
        setlocation("");
      }
    }
  }

  const handleInputBox = ( event ) => {
    document.getElementById('input_box').classList.toggle('active');
  }

  return(
    <Data.Provider value={{
      location, setlocation, 
      weather, setweather,
      handleInputBox, collectData,weatherWord
    }}>
      {children}
    </Data.Provider>
  )
}

export default Data;