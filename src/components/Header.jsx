// // src/components/Header.js
// import React from 'react';
// import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons
// import logo from '../assets/logo.jpeg';
// const Header = () => {
//   return (
//     <>
//       {/* Header Section */}
//       <header style={headerStyle}>
//         <div className="container-fluid w-100 d-flex justify-content-between align-items-center py-2">
//           {/* Left Side - Logo and Text */}
//           <div className="d-flex align-items-center">
//             <img
//               src={logo} // Replace with your actual logo URL
//               alt="Logo"
//               style={logoStyle}
//             />
//             <div className="ms-3">
//               <div style={infoBoxStyle}>
//                 <span style={infoTextStyle}>New Upakram</span>
                
//                 <span style={infoTextStyle}>महाराष्ट्र लोकसेवा हक्क अधिनियम</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Search, Language, Login, Phone */}
//           <div className="d-flex align-items-center">
//             {/* Search Bar with Icon */}
//             <div className="input-group" style={{ width: '250px' }}>
//               <span className="input-group-text" style={searchIconStyle}>
//                 <FaSearch />
//                 <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search Here..."
//                 aria-label="Search"
//                 style={searchBarStyle}
//               />
//               </span>
              
//             </div>

//             {/* Language and Phone */}
//             <span className="mx-2" style={languageStyle}>A+</span>
//             <span className="mx-2" style={languageStyle}>English</span>
//             <span className="mx-3" style={phoneStyle}>+91 8169671363</span>
//             <button className="btn btn-outline-light" style={loginButtonStyle}>Login</button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// // Styles
// const headerStyle = {
//   backgroundColor: '#ffff', // Green background for header
//   color: '#fff',
//   padding: '10px 0',
// };

// const logoStyle = {
//   width: '50px', // Adjust the logo size
//   height: 'auto',
// };

// const infoBoxStyle = {
//   backgroundColor: '#fff',
//   color: '#4CAF50', // Green text
//   padding: '10px',
//   borderRadius: '5px',
//   fontSize: '14px',
// };

// const infoTextStyle = {
//   color: '#4CAF50', // Green text
//   fontSize: '14px',
// };

// const searchIconStyle = {
//   color: '#4CAF50', // Green icon color
// };

// const searchBarStyle = {
//   width: '100%',
//   paddingLeft: '40px', // Adding space for search icon
// };

// const languageStyle = {
//   fontSize: '14px',
//   color: '#fff',
//   cursor: 'pointer',
// };

// const phoneStyle = {
//   fontSize: '14px',
//   color: '#fff',
//   marginLeft: '15px',
// };

// const loginButtonStyle = {
//   backgroundColor: '#fff',
//   color: '#4CAF50',
//   fontSize: '14px',
//   borderRadius: '5px',
//   padding: '5px 10px',
// };

// export default Header;




// src/components/Header.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons
import { Dropdown } from 'react-bootstrap'; // Import Bootstrap Dropdown
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [language, setLanguage] = useState('English'); // Language state

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage); // Update selected language
  };

  return (
    <>
      {/* Header Section */}
      <header style={headerStyle}>
        <div className="container-fluid w-100 d-flex justify-content-between align-items-center py-2">
          {/* Left Side - Logo and Text */}
          <div className="d-flex align-items-center">
            <img
              src={logo} // Replace with your actual logo URL
              alt="Logo"
              style={logoStyle}
            />
            <div className="ms-3">
              <div style={infoBoxStyle}>
                <span style={infoTextStyle}>New Upakram</span>
                <span style={infoTextStyle}>महाराष्ट्र लोकसेवा हक्क अधिनियम</span>
              </div>
            </div>
          </div>

          {/* Right Side - Search, Language, Login, Phone */}
          <div className="d-flex align-items-center">
            {/* Search Bar with Icon */}
            <div className="input-group" style={{ width: '250px' }}>
              <span className="input-group-text" style={searchIconStyle}>
                <FaSearch />
                <input
                type="text"
                className="form-control"
                placeholder="Search Here..."
                aria-label="Search"
                style={searchBarStyle}
              />
              </span>
             
            </div>

            {/* Language Dropdown */}
            <Dropdown className="mx-2">
              <Dropdown.Toggle variant="link" style={languageStyle}>
                {language}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLanguageChange('English')}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange('मराठी')}>मराठी</Dropdown.Item>
                {/* Add more languages if needed */}
              </Dropdown.Menu>
            </Dropdown>

            {/* Phone Number */}
            <span className="mx-3" style={phoneStyle}>+91 8169671363</span>
            <button className="btn btn-outline-light" style={loginButtonStyle}>Login</button>
          </div>
        </div>
      </header>
    </>
  );
};

// Styles
const headerStyle = {
  backgroundColor: '#ffff', // Green background for header
  color: '#fff',
  padding: '10px 0',
};

const logoStyle = {
  width: '50px', // Adjust the logo size
  height: 'auto',
};

const infoBoxStyle = {
  backgroundColor: '#fff',
  paddingLeft:'20px',
  color: '#4CAF50', // Green text
  padding: '10px',
  borderRadius: '5px',
  fontSize: '14px',
};

const infoTextStyle = {
  color: '#4CAF50', // Green text
  fontSize: '14px',
  paddingLeft:'20px',

};

const searchIconStyle = {

  color: '#4CAF50', // Green icon color
};

const searchBarStyle = {
    paddingLeft:'20px',

  width: '100%',
  paddingLeft: '40px', // Adding space for search icon
};

const languageStyle = {
  fontSize: '14px',
  color: 'black',
  cursor: 'pointer',
};

const phoneStyle = {
  fontSize: '14px',
  color: 'black',
  marginLeft: '15px',
};

const loginButtonStyle = {
  backgroundColor: 'green',
  color: '#ffff',
  fontSize: '14px',
  borderRadius: '5px',
  padding: '5px 10px',
};

export default Header;
