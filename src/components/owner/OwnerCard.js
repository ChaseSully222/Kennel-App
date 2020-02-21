import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Owner:</h1>
        <section>Goku</section>
        <img id="sonGoku" src={require("./goku.jpg")} alt="Billy Bob" />
      </div>
    </div>
  );
};

export default OwnerCard;
