import React from "react";
import { Link } from "react-router-dom";


const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Location</h1>
        <section>
          <b>Address: </b>
          {props.location.name}
        </section>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.location.id)}
        >
          Close Location
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
