import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import ListEmployeeComponent from "./Component/ListEmployeeComponent";
import { Route } from "react-router-dom";
import AddEmployee from "./Component/AddEmployee";

function App() {
  return (
    <>
     <BrowserRouter>
      <Header></Header>
      <Routes>
        {/* defaultpage */}
      <Route path="/" element={<ListEmployeeComponent/>} />
       <Route path="/employee" element={<ListEmployeeComponent/>} />
       <Route path="/add-employee" element={<AddEmployee/>} />
        <Route path="/update-employee/:id" element={<AddEmployee/>} />


      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
