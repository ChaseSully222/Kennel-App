import React from "react";

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
        <button
          type="button"
          onClick={() => {
            props.history.push(`/locations/${props.locationObj.id}/details`);
          }}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/locations/${props.locationObj.id}/edit`)
          }
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
