import React, { useState } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

const OwnerForm = props => {
  const [owner, setOwner] = useState({
    name: "",
    phoneNumber: "",
    picture: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.phoneNumber === "" || owner.picture === "") {
      window.alert("Please input a name, phone number, and photo");
    } else {
      setIsLoading(true);
      OwnerManager.post(owner).then(() => props.history.push("/owners"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Owner Name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phoneNumber"
              placeholder="Phone Number"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="img src"
              required
              onChange={handleFieldChange}
              id="picture"
              placeholder="picture"
            />
            <label htmlFor="picture">Owner Photo</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm;
