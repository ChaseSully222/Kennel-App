import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        image: animal.image
      });
    });
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-petname">{animal.name}</span>
        </h3>
        <picture>
          <img src={animal.image} alt="My Dog" />
        </picture>
        <p>Breed: {animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalDetail;
