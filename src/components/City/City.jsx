import React from 'react';
import './City.styles.css'


const City = ({cityName, country, url, description, windSpeed, clouds, temp, handleTemp, isCelcius, pressure}) => {

   

    return (
        
        <div className='card'>
            <div className='title'>
                <h1>Weather App</h1> 
                <h2>{cityName}, {country}</h2>
            </div>
            <div className='information'> 
                <div className='image'>
                    <img src = {url} alt="weather" />
                </div>
                <div className='specific_information'>
                    <h3>"{description}"</h3>
                    <span> <i className="fas fa-wind"></i> <b>Wind speed </b> {windSpeed} m/s</span>
                    <span> <i className="fas fa-cloud"></i> <b>Clouds  </b>{clouds}%</span>
                    <span> <i className="fas fa-thermometer"></i> <b>Pressure</b> {pressure}</span>
                    <div className='button' > 
                        <span> <i className="fas fa-temperature-high"></i> 
                                <b> Temperature </b>
                                {isCelcius?` ${temp} °C`:`${((temp*9/5)+32).toFixed(2)} °F`}
                        </span>
                        <button onClick={handleTemp}><i className="fas fa-exchange-alt"></i></button>
                        <span>{isCelcius?' °F':' °C'}</span>
                    </div>  
                </div>    
            </div>      
        </div>

        
    );
};

export default City;