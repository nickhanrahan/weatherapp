import React,  { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style/forecast.css';

const Forecast = ({ isOpen, toggleOpen, city }) => {
  if (!isOpen) {
    return null;
  }
  const [forecast, setForecast] = useState({})

  useEffect(() => {
    axios.get(`/forecast/${city.id}`)
      .then((res) => {
        console.log(res.data);
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
        <div className="forecast-ctr">
        idk
        </div>
      </div>
    </>,
    document.getElementById('app'),
  )
}

export default Forecast;