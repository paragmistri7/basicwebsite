import React from "react";
import { Link, Outlet } from "react-router-dom";
import dino from '../Images/dino.png'
import Footer from "./footer";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container ">
          <div className="row navbar_bg ">
            <nav className="navbar navbar-expand-lg  ">
              {/* <div className="container-fluid"> */}
                <img src={dino} alt="" className=" logo" />
                <Link className="navbar-brand fs-1 ps-4 fw-bold " to="/">
                  Animal Safari
                </Link>
               
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto navbar_link fs-5 text-succes ">
                    <li className="nav-item ">
                      <Link className="nav-link " to="/home">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="/product">
                        Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Registration
                      </Link>
                    </li>
                  </ul>
                </div>
              {/* </div> */}
            </nav>
          </div>
  
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Outlet />       
        </div>    
      </div>
       {/* <Footer/> */}
    </>
  );
};

export default Navbar;
