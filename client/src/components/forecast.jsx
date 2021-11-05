import React,  { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ForecastCard from './forecastCard.jsx';
import Hourly from './hourly.jsx';
import { GlobalContext } from './app.jsx';
import './style/forecast.css';

const Forecast = ({ isOpen, toggleOpen, city }) => {
  if (!isOpen) {
    return null;
  }
  const [forecast, setForecast] = useState({})
  const [daySelected, setDaySelected] = useState(0);
  const globalData = useContext(GlobalContext);


  // useEffect(() => {
  //   axios.get(`/hourly/${}`)
  // }, [daySelected])

  useEffect(() => {
    axios.get(`/forecast/${city.coord.lat}/${city.coord.lon}`)
      .then((res) => {
        console.log(res.data)
        setForecast(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      })
  }, [])

  return ReactDOM.createPortal (
    <>
      <div className="forecast-overlay"></div>
      <div className="forecast-window">
        <div className="forecast-top">
          <button className="forecast-close-btn" onClick={toggleOpen} >X</button>
        </div>
        <div className="forecast-main">
          {forecast.current &&
            <div className="cur-ctr">
              <div className="forecast-info">
                <div className="cur-date">{(new Date(forecast.current.dt * 1000).toLocaleDateString('en-US'))}</div>
                <div className="city-name">{city.name}, {city.state || '\(No State\)'}, {city.country || '\(No Country\)'}</div>
              </div>
              <div className="forecast-cur">
                <div className="fc-cur-icon-ctr">
                  <img className="fc-cur-icon" src={`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`}/>
                </div>
                <div className="fc-cur-temp">{globalData.state.convertKtoF(forecast.current.temp)}&#176;F</div>
              </div>
            </div>
          }
        </div>
        <div className="forecast-daily-title">Daily:</div>
        <div className="forecast-cards">
          {forecast.daily &&
            forecast.daily.map((day) => (
              <ForecastCard key={`${day.dt}`} day={day} />
            ))
          }
        </div>
        <div className="forecast-hourly-title">Hourly:</div>
        <div className="hourly-cards">

        </div>
      </div>
    </>,
    document.getElementById('app'),
  )
}

export default Forecast;