import React, { useState } from 'react';
import './style/results.css';
import Forecast from './forecast.jsx';

const CityResult = ({ city }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="city-result-ctr" onClick={toggleOpen} >
        <div className="results-1-6">{city.id}</div>
        <div className="results-2-6">{city.name}</div>
        <div className="results-3-6">{city.state}</div>
        <div className="results-4-6">{city.country}</div>
        <div className="results-5-6">{city.coord.lon}</div>
        <div className="results-6-6">{city.coord.lat}</div>
      </div>
      <Forecast isOpen={isOpen} toggleOpen={toggleOpen} city={city} />
    </>
  )
}

export default CityResult;