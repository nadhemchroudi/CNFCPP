import React from "react";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
      <img src="http://www.cnfcpp.tn/wp-content/uploads/2019/09/Sans-titre-10.png" alt="" width="100" height="100"/>
      </Link>
    </div>
  );
};

export default NavbarLogo;
