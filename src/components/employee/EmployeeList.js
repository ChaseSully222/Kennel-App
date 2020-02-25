import EmployeeManager from "../../modules/EmployeeManager";
import React, { useState, useEffect } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
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
    <div className="container-cards">
      {employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee} />
      ))}
    </div>
  );
};

export default EmployeeList;
