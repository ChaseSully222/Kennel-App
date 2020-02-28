import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{props.employee.name}</h1>
        <picture>
          <img src={props.employee.picture} alt="Employee"></img>
        </picture>
        <button
          type="button"
          onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteEmployee(props.employee.id)}
        >
          You're Fired!
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
