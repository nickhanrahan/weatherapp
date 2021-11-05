import React, { useState, useContext } from 'react';
import { GlobalContext } from './app.jsx';
import './style/forecast.css';

const ForecastCard = ({ day }) => {
  const globalData = useContext(GlobalContext);

  const fullDate = (new Date(day.dt * 1000)).toLocaleDateString('en-US');
  const date = fullDate.substring(0, fullDate.length - 5);

  return (
    <div className="forecast-card-ctr">
      <div className="forecast-icon-ctr">
        <img className="forecast-icon" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
      </div>
      <div className="fc-low-high">
        <div className="fc-low">{globalData.state.convertKtoF(day.temp.min)}</div>
        <div className="fc-high">{globalData.state.convertKtoF(day.temp.max)}</div>
      </div>
      <div className="forecast-temp">{globalData.state.convertKtoF(day.temp.day)}&#176;F</div>
      <div className="fc-date">{date}</div>
    </div>
  )
}

export default ForecastCard;