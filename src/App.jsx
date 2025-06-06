import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import ListEmployeeComponent from "./Component/ListEmployeeComponent";
import { Route } from "react-router-dom";
import AddEmployee from "./Component/AddEmployee";
import Register from "./Component/Register";
import Login from "./Component/Login";
import ProtectedRoute from "./Component/ProtectedRoute";
import UnauthorizedPage from "./Component/UnauthorizedPage";

function App() {
  return (
    <>
     <BrowserRouter>
      <Header></Header>
      <Routes>
        {/* defaultpage */}
      <Route path="/" element={<Register/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      

       <Route 
       path="/employee"
       
        element={
          <ProtectedRoute allowedRoles={["ROLE_ADMIN","ROLE_USER"]}>
        <ListEmployeeComponent/>
        </ProtectedRoute>
        } 
        />

       <Route
        path="/add-employee"

         element={
         <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
         <AddEmployee/>
         </ProtectedRoute>
         } 
         />

        <Route path="/update-employee/:id" element={        
           <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
         <AddEmployee/>
         </ProtectedRoute>} 
         />

          <Route path="/unauthorized" element={<UnauthorizedPage/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
