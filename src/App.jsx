import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import IconWeather from './components/IconWeather';

function App() {
  
  const [weather,setWeather]= useState ({});
  const [selector, setSelector] =useState(true);
  const [metric,setMetric] = useState(true);
  


  useEffect(()=>{
  
    navigator.geolocation.getCurrentPosition(success);
  
  
  
  function success(pos) {
    
    const crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=1be5a17c97513a6ea873cbddde7fd6c7&units=${metric}`)
    .then(res =>setWeather(res.data));   
  }
  

    
  }, [])

  return ( 
    <div className="App">
      <div className="card">
      <h1>Weather Master App</h1>
      <h2>{weather?.name}, {weather.sys?.country}</h2>
      <h2>{weather.weather?.[0].description}</h2>
      <h2>{weather.main?.temp}</h2>
      <IconWeather weather={weather}/>
      {console.log(weather)}
      <button onClick={()=>{setSelector(!selector); selector? setMetric('metric'):setMetric('imperial');
  console.log(metric); navigator.geolocation.getCurrentPosition(success);}}>CELCIUS/Farenheit</button>
      {console.log(selector)}
      </div>
    </div>
  )
}

export default App
