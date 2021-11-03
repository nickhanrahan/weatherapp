import React from 'react';
import { GlobalContext } from './app.jsx';


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
        <div className="results-cities"></div>
      </div>
    </div>
  )
}

export default Results;