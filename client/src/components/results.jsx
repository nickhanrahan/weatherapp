import React, { useContext } from 'react';
import CityResult from './cityResult.jsx';
import { GlobalContext } from './app.jsx';
import './style/results.css';

const Results = () => {
  const globalData = useContext(GlobalContext);
  return (
    <div className="results-ctr">
      <div className="results-table">
        <div className="results-titles">
          <div className="results-1-6">ID</div>
          <div className="results-2-6">City Name</div>
          <div className="results-3-6">State</div>
          <div className="results-4-6">Country</div>
          <div className="results-5-6">Longitude</div>
          <div className="results-6-6">Latitude</div>
        </div>
        <div className="results-cities">
          {globalData.state.searchResults.map((city) => (
            <CityResult key={city.id} city={city}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Results;