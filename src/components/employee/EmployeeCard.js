import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{props.employee.name}</h1>
      </div>
    </div>
  );
};

export default EmployeeCard;
