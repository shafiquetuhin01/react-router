import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Welcome to my react routing application</h1>
      <nav className="m-2 p-2 bg-info">
        <Link className="m-3 text-decoration-none text-white" to="/">
          Home
        </Link>
        <Link className="m-3 text-decoration-none text-white" to="/friends">
          Friends
        </Link>
        <Link className="m-3 text-decoration-none text-white" to="/posts">
          Posts
        </Link>
        <Link className="m-3 text-decoration-none text-white" to="/about-us">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
