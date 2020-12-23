import React from "react";

const Header = () => {
  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="/home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">
            Register
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">
            Login
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
