// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // default active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // update active link on click
  };

  return (
    <nav style={navbarStyle}>
      <div className="container-fluid w-100">
        <ul style={navListStyle} className="nav">
          <li className="nav-item">
            <Link
              to="/"
              style={activeLink === 'home' ? activeLinkStyle : linkStyle}
              className="nav-link"
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/vasai-virar-corporation"
              style={activeLink === 'vasaiVirarCorporation' ? activeLinkStyle : linkStyle}
              className="nav-link"
              onClick={() => handleLinkClick('vasaiVirarCorporation')}
            >
              Vasai Virar Corporation
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/work-city"
              style={activeLink === 'workCity' ? activeLinkStyle : linkStyle}
              className="nav-link"
              onClick={() => handleLinkClick('workCity')}
            >
              Work City
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              style={activeLink === 'services' ? activeLinkStyle : linkStyle}
              className="nav-link"
              onClick={() => handleLinkClick('services')}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/disaster-management"
              style={activeLink === 'disasterManagement' ? activeLinkStyle : linkStyle}
              className="nav-link"
              onClick={() => handleLinkClick('disasterManagement')}
            >
              Disaster Management
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/suggestion-feedback"
              style={activeLink === 'suggestionFeedback' ? activeLinkStyle : linkStyle}
              className="nav-link"
              onClick={() => handleLinkClick('suggestionFeedback')}
            >
              Suggestion & Feedback
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contacts"
              style={activeLink === 'contacts' ? activeLinkStyle : linkStyle}
              className="nav-link"
              onClick={() => handleLinkClick('contacts')}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Styles
const navbarStyle = {
  backgroundColor: '#4CAF50', // Green background
  color: '#fff',
  padding: '10px 0',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
  margin: '0',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '10px 15px',
  fontSize: '16px',
  display: 'block',
};

const activeLinkStyle = {
  backgroundColor: '#fff',
  color: '#4CAF50', // Green text for active link
  borderRadius: '5px',
  padding: '10px 15px',
  fontSize: '16px',
  fontWeight: 'bold',
};

export default Navbar;
