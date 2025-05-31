import { useEffect, useRef, useState } from "react";
import styles from "./AddEmployees.module.css";
import { createEmployee, getEmployeeById, updateEmployee } from "../Services/EmployeeService";
import { useNavigate ,useParams} from "react-router-dom";
function AddEmployee() {

  const navigator=useNavigate();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const {id}=useParams();

  const [errors, setErrors] = useState({
  firstName: "",
  lastName: "",
  email: ""
});

useEffect(()=>{
    if(id){
      getEmployeeById(id).then((response)=>{
        firstNameRef.current.value =response.data.firstName;
        lastNameRef.current.value  =response.data.lastName;
        emailRef.current.value     =response.data.email;
      }).catch(error=> console.log(error));
    }
},[id])

const validate = () => {
  const newErrors = {};
  const firstName = firstNameRef.current.value.trim();
  const lastName = lastNameRef.current.value.trim();
  const email = emailRef.current.value.trim();

  if (!firstName) newErrors.firstName = "First name is required";
  if (!lastName) newErrors.lastName = "Last name is required";
  if (!email) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = "Invalid email format";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const employeeData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
    };

    if(id){
      updateEmployee(id,employeeData).then((response)=>{
        console.log(response);
        navigator("/employee");
      }).catch(error=>console.log(error));
    }
    else{
        createEmployee(employeeData).then((response)=>{
      console.log(response.data);
      navigator("/employee");
    }).catch(error=>console.log(error));
    }

  };




  return (
    <div className={styles.container}>
      <div className={styles["form-wrapper"]}>
        {/* Header */}
        <div className={styles.header}>

          <h1 className={styles.title}>
             {id ? "Update Employee" : "Add New Employee"}
          </h1>
          <p className={styles.subtitle}>
            {id ? "Update existing team member's information" : "Fill in the details to add a new team member"}
            </p>
        </div>

        {/* Form Card */}
        <div className={styles["form-card"]}>
          <div className={styles["gradient-bar"]}></div>

          <div className={styles["form-content"]}>
            {/* First Name Field */}
            <div className={styles["field-group"]}>
              <label className={styles.label}>First Name</label>
              <div className={styles["input-wrapper"]}>
                <input
                  ref={firstNameRef}
                  type="text"
                  className={`${styles.input} ${errors.firstName ? styles.errorInput : ""}`}
                  placeholder="Enter first name"
                />
              </div>
              {errors.firstName && <p className={styles["error-text"]}>{errors.firstName}</p>}

            </div>

            {/* Last Name Field */}
            <div className={styles["field-group"]}>
              <label className={styles.label}>Last Name</label>
              <div className={styles["input-wrapper"]}>
                <input
                  ref={lastNameRef}
                  type="text"
                  className={`${styles.input} ${errors.lastName ? styles.errorInput : ""}`}
                  placeholder="Enter last name"
                />
              </div>
              {errors.lastName && <p className={styles["error-text"]}>{errors.lastName}</p>}

            </div>

            {/* Email Field */}
            <div className={styles["field-group"]}>
              <label className={styles.label}>Email Address</label>
              <div className={styles["input-wrapper"]}>
                <input
                  ref={emailRef}
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
                  placeholder="Enter email address"
                />
              </div>
              {errors.email && <p className={styles["error-text"]}>{errors.email}</p>}

            </div>

            {/* Submit Button */}
            <button onClick={handleSubmit} className={styles["submit-button"]}>
               {id ? "Update Employee" : "Add Employee"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
