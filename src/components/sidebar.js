import React, { useState, useEffect, useRef } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';
import './sidebar.scss'


const Sidebar = () => {

  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBrowser = typeof window !== `undefined`
      const currentScrollY = isBrowser && window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  let inView = goingUp ? "fadeIn" : "fadeOut"
  
  return (
    <Menu burgerButtonClassName={inView} right >
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/events">
        Eventi
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
