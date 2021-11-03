import React from 'react';
import './style/results.css';

const CityResult = ({ city }) => {
  return (
    <div className="city-result-ctr">
      <div className="results-1-6">{city.id}</div>
      <div className="results-2-6">{city.name}</div>
      <div className="results-3-6">{city.state}</div>
      <div className="results-4-6">{city.country}</div>
      <div className="results-5-6">{city.coord.lon}</div>
      <div className="results-6-6">{city.coord.lat}</div>
    </div>
  )
}

export default CityResult;