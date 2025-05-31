import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import styles from "./ListEmployeeComponent.module.css";
const ListEmployeeComponent = () => {
  const [employee, setemployee] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees(){
        listEmployees()
      .then((response) => {
        setemployee(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const addNewEmployee = () => {
    navigator("/add-employee");
  };

  const updateEmployee = (id) => {
    navigator(`/update-employee/${id}`);
  };

  const removeEmployee=(id)=>{
    deleteEmployee(id).then((response)=>{
      getAllEmployees();
    }).catch(error=>console.log(error));
  }
    
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>List of Employees</h2>
        <button
          type="button"
          className={styles.addButton}
          onClick={addNewEmployee}
        >
          ADD EMPLOYEE
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((empl) => (
              <tr key={empl.id} className={styles.tableRow}>
                <td>{empl.id}</td>
                <td>{empl.firstName}</td>
                <td>{empl.lastName}</td>
                <td>{empl.email}</td>
                <td>
                  <div className="d-flex gap-4">
                  <button
                    className="btn btn-info fs-5 fw-bold px-4 py-2  "
                    style={{color:"black"}}
                    onClick={() => updateEmployee(empl.id)}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger fs-5 fw-bold px-4 py-2"
                    onClick={() => removeEmployee(empl.id)}
                    
                  >
                    Delete
                  </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
