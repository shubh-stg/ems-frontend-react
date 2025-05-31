import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/api/employee';

export const listEmployees=()=>axios.get(REST_API_BASE_URL);
export const createEmployee=(employee)=>axios.post(REST_API_BASE_URL,employee);
export const getEmployeeById=(empID)=>axios.get(REST_API_BASE_URL + "/" + empID);
export const updateEmployee=(empId,employeedata)=>axios.put(REST_API_BASE_URL+"/"+empId , employeedata);
export const deleteEmployee=(empId)=>axios.delete(REST_API_BASE_URL+"/"+empId);