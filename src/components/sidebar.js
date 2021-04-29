import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';
import './sidebar.scss'

const Sidebar = () => {
  
  return (
    <Menu right >
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/about">
        About
      </Link>

      <Link className="menu-item" to="/contactUs">
        Contact Us
      </Link>

      <Link className="menu-item" to="/blog">
        Blog
      </Link>
    </Menu>
  );
};

export default Sidebar
