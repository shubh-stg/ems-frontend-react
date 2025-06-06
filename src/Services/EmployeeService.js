import axios from "axios";
<<<<<<< HEAD
import apiClient from "./apiClient";


const  AUTH_API_BASE_URL = 'http://localhost:8080/auth';

export const listEmployees=()=>apiClient.get("");
export const createEmployee=(employee)=>apiClient.post("",employee);
export const getEmployeeById=(empID)=>apiClient.get(`/${empID}`);
export const updateEmployee=(empId,employeedata)=>apiClient.put(`/${empId} `, employeedata);
export const deleteEmployee=(empId)=>apiClient.delete(`/${empId}`);

export const registerUser=(user)=>axios.post(`${AUTH_API_BASE_URL}/register` , user);
export const loginUser=(para)=>axios.post(`${AUTH_API_BASE_URL}/login`,para);
=======

const REST_API_BASE_URL='http://localhost:8080/api/employee';

export const listEmployees=()=>axios.get(REST_API_BASE_URL);
export const createEmployee=(employee)=>axios.post(REST_API_BASE_URL,employee);
export const getEmployeeById=(empID)=>axios.get(REST_API_BASE_URL + "/" + empID);
export const updateEmployee=(empId,employeedata)=>axios.put(REST_API_BASE_URL+"/"+empId , employeedata);
export const deleteEmployee=(empId)=>axios.delete(REST_API_BASE_URL+"/"+empId);
>>>>>>> acbae766017ba3065976805f9883ce7dca268387
