import React from "react";

const AnimalCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img id="dogImg" src={require("./husky.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">Gohan</span>
        </h3>
        <p>Breed: Siberian Husky</p>
        <picture>
          <img id="dogImg" src={require("./gsDog.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">Vegeta</span>
        </h3>
        <p>Breed: German Shepherd</p>
      </div>
    </div>
    
  );
};

export default AnimalCard;
