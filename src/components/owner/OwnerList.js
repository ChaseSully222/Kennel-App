import OwnerManager from "../../modules/OwnerManager";
import React, { useState, useEffect } from "react";
//import the components we will need
import OwnerCard from "./OwnerCard";

const OwnerList = () => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    return OwnerManager.getAll().then(ownersFromApi => {
      setOwners(ownersFromApi);
    });
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <div className="container-cards">
      {owners.map(owner => (
        <OwnerCard key={owner.id} owner={owner} />
      ))}
    </div>
  );
};

export default OwnerList;