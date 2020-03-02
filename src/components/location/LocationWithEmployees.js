import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import EmployeeCard from "../employee/EmployeeCard";

const LocationWithEmployees = props => {
  const [location, setLocation] = useState({});
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    LocationManager.getWithEmployees(props.match.params.locationId)
    .then(APIResult => {
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      }
    );
  }, []);

  return (
    <div className="card">
      <p>Location: {location.name}</p>
      <p>Address: {location.address}</p>
      {employees.map(employee => 
        <EmployeeCard key={employee.id} employee={employee} {...props} />
      )}
    </div>
  );
};

export default LocationWithEmployees;
