import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
           <Link to="/">Home</Link>
        </li>
        <li>
           <Link to="/expenses">Expenses</Link>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;