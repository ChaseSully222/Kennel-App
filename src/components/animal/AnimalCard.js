import React from "react";
import "./Animal.css";

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-petname">
          {props.animal.name}
        </span></h3>
        <picture>
          <img src={props.animal.image} alt="My Dog" />
        </picture>
        <p>Breed: {props.animal.breed}</p>
      </div>
    </div>
  );
}

export default AnimalCard;
