import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Owner</h1>
        <h3>{props.owner.name}</h3>
        <picture><img src={props.owner.picture}></img></picture>
        <section>
          <em>{props.owner.phoneNumber}</em>
        </section>
      </div>
    </div>
  );
};

export default OwnerCard;
