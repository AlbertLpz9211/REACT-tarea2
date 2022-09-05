import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [weather,setWeather]= useState ({});


  useEffect(()=>{
  navigator.geolocation.getCurrentPosition(success);
  
  function success(pos) {
    
    const crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=1be5a17c97513a6ea873cbddde7fd6c7`)
    .then(res =>setWeather(res.data));
   
    
  }


    
  }, [])

  return (
    <div className="App">
      <h1>hola mundo</h1>

      {/* añadir imagen en weather */}
        <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@4x.png`} alt="" />
    </div>
  )
}

export default App
