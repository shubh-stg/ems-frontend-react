import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import ListEmployeeComponent from "./Component/ListEmployeeComponent";
import { Route } from "react-router-dom";
import AddEmployee from "./Component/AddEmployee";
<<<<<<< HEAD
import Register from "./Component/Register";
import Login from "./Component/Login";
import ProtectedRoute from "./Component/ProtectedRoute";
import UnauthorizedPage from "./Component/UnauthorizedPage";
=======
>>>>>>> acbae766017ba3065976805f9883ce7dca268387

function App() {
  return (
    <>
     <BrowserRouter>
      <Header></Header>
      <Routes>
        {/* defaultpage */}
<<<<<<< HEAD
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
=======
      <Route path="/" element={<ListEmployeeComponent/>} />
       <Route path="/employee" element={<ListEmployeeComponent/>} />
       <Route path="/add-employee" element={<AddEmployee/>} />
        <Route path="/update-employee/:id" element={<AddEmployee/>} />


>>>>>>> acbae766017ba3065976805f9883ce7dca268387
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
