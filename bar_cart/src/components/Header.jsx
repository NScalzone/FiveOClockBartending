import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
    return (
    <nav className = "nav">
      <Link to= "/" className = "site-title"> 
      <img src="./five_o_clock_logo_black.png" alt="five o'clock logo" width="100" height="100"/> 
      </Link>
        <ul>
            <li>  
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
)
}

export default Header;

/*
Tutorial Bullshit

function CustomLink({to, children, ...props }){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
*/