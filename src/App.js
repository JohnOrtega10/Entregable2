

import {useEffect, useState} from 'react';
import axios from 'axios';
import City from './components/City/City';
import Loader from './components/Custom/Loader/Loader';
import './App.css'

function App() {

  
const [city, setCity]=useState();
const [isCelcius, setIsCelcius ]=useState(true)
const [url, setUrl]=useState()
const [isLoading, setIsLoading]=useState(true)

  useEffect(()=>{
    
    const success = (position)=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=e94c83e69b8f7ca7424b9b2a9851736d`)
           .then(res=>{setCity(res.data)
                       setUrl(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)})
           .catch(error => console.log(error))
           .finally(()=>setIsLoading(false))

    }
    navigator.geolocation.getCurrentPosition(success,()=>{})
   
  },[]);
  
 

  const handleTemp = ()=>{
    setIsCelcius(!isCelcius)
  }


  return (
    <div className='App'>
      {
        isLoading ? (
          <Loader/>
        ) : (
          <City 
            cityName={city?.name} 
            country={city?.sys.country} 
            url={url} 
            description={city?.weather[0].description}
            windSpeed={city?.wind.speed}
            clouds={city?.clouds.all}
            temp={city?.main.temp}
            handleTemp={handleTemp}
            isCelcius={isCelcius}
            pressure={city?.main.pressure}
          />
        )   
      }
    </div>
  );
}

export default App;
