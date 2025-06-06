import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToList = () => {
    navigate("/employee");
  };

  return (
    <header className="bg-dark text-white py-3 text-center d-flex justify-content-between align-items-center px-4">
      <h2 className="m-0">Employee Management System</h2>

      <div>
        <button className="btn btn-outline-light me-2" onClick={goToList}>
          View Employees
        </button>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

