import EmployeeManager from "../../modules/EmployeeManager";
import React, { useState, useEffect } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";

const EmployeeList = props => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromApi => {
      setEmployees(employeesFromApi);
    });
  };

  const deleteEmployee = id => {
    EmployeeManager.delete(id).then(() =>
      EmployeeManager.getAll().then(setEmployees)
    );
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/employees/new");
          }}
        >
          New Employee
        </button>
      </section>
      <div className="container-cards">
        {employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={deleteEmployee}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
