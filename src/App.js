import React,{useContext} from 'react';
import Data from './DataContext';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const {weatherWord} = useContext(Data);
  let appClass = "app";
  switch (weatherWord.toLowerCase()) {
    case "clouds":
    case "mist":
      appClass += " mist";
      break;
    case "clear":
      appClass += " clear";
      break;
    case "drizzle":  
    case "rain":
      appClass += " rain";
      break;
    case "fog":
      appClass += " fog";
      break;
    case "haze":  
    case "frosty":
      appClass += " frosty";
      break;
    case "sunny":
      appClass += " sunny";
      break;
    case "snow":
      appClass += " snow";
      break;
    case "thunderstorm":
      appClass += " thunderstorm";
      break;
    default: 
      appClass += " normal";
      break;  
  }
  
  
  
  return (
    <div className={appClass}>
      <article>
        <Header />
        <Main />
      </article>
    </div>
  )
}

export default App;
