import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <h1>Location</h1>
        <section>
          <b>Address: </b>
          {location.name}
        </section>
      </div>
    </div>
  );
}

export default LocationDetail;