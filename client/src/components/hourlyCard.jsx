import React, { useContext } from 'react';
import { GlobalContext } from './app.jsx';
import './style/forecast.css';

const HourlyCard = ({ hour }) => {
  const globalData = useContext(GlobalContext);

  const fullTime = (new Date(hour.dt * 1000)).toLocaleTimeString('en-US').split('');
  let time = fullTime;
  if (fullTime[1] === ':') {
    time.splice(4, 3).join();
  } else {
    time.splice(5, 3).join();
  }
  return (
    <div className="hour-card-ctr">
      <div className="hour-icon-ctr">
        <img className="hour-icon" src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}/>
      </div>
      <div className="hour-temp">{globalData.state.convertKtoF(hour.temp)}&#176;F</div>
      <div className="hour-time">{time}</div>
    </div>
  )
}

export default HourlyCard;
