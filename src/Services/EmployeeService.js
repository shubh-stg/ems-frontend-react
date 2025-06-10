import axios from "axios";
import apiClient from "./apiClient";


const  AUTH_API_BASE_URL = 'http://localhost:8080/auth';

export const listEmployees=()=>apiClient.get("");
export const createEmployee=(employee)=>apiClient.post("",employee);
export const getEmployeeById=(empID)=>apiClient.get(`/${empID}`);
export const updateEmployee=(empId,employeedata)=>apiClient.put(`/${empId} `, employeedata);
export const deleteEmployee=(empId)=>apiClient.delete(`/${empId}`);

export const registerUser=(user)=>axios.post(`${AUTH_API_BASE_URL}/register` , user);
export const loginUser=(para)=>axios.post(`${AUTH_API_BASE_URL}/login`,para);
