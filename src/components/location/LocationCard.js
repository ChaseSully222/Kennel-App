import React from "react";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Location</h1>
        <section>
          <h3>{props.locationObj.name}</h3>
          <b>Address: </b>
          {props.locationObj.address}
        </section>
        <Link to={`/locations/${props.locationObj.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/locations/${props.locationObj.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.locationObj.id)}
        >
          Close Location
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
