import React from "react";

const Footer= () => {
  return (
    <footer className="bg-dark text-white py-2 text-center" style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <span>&copy; {new Date().getFullYear()} Employee Management App</span>
    </footer>
  );
};

export default Footer;
