import React from 'react';
import ReactDOM from 'react-dom';
import './style/forecast.css';

const Forecast = ({ isOpen, toggleOpen }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal (
    <>
      <div className="forecast-overlay"></div>
      <div className="forecast-window">
        <div className="forecast-ctr">
        idk
        </div>
      </div>
    </>,
    document.getElementById('app'),
  )
}

export default Forecast;