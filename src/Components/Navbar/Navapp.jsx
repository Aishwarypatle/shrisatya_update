import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./Navapp.css";

const Navapp = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="flex navbr pt-2">
                            {/* <h1 className="logo flex h-8"> */}
                            <img
                                src="Images/logo1.png"
                                alt=""
                                style={{
                                    height: "65px",
                                    // width: "100",
                                }}
                               
                            />
                            <img
                                src="Images/logo11.png"
                                alt=""
                                style={{
                                    height: "70px",
                                    margin: "auto",
                                    borderRadius:"10px",
                                }}
                                className="logo"
                            />

                            {/* <NavLink to="/" className="font-bold">
                                <h1 className="mr-5 pr-3 pt-2 text-dark">
                                    {" "}
                                    Shrisatya{" "}
                                </h1>
                            </NavLink> */}
                        </div>

        <div className="navbar-toggle" onClick={handleMenuToggle}>
          {showMenu ? <IoMdClose /> : <FaBars />}
        </div>
        <ul className={`navbar-menu ${showMenu ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link">
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navapp;
