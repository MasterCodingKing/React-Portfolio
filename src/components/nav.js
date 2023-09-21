import React from "react";
import { Link } from "react-router-dom";
function Navigation(){
    return(
        <div>
             <nav className="navbar navbar-dark navbar-expand-lg bg-dark bg-body-primary ">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand" to='/home'><span className="text-danger"> C</span>hristian</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                        <li className="nav-item">
                        <Link to='/home' className="nav-link active " aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/service'className="nav-link" >Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/About' className="nav-link" >About</Link>
                        </li>
                       
                    </ul>
                    <span className="navbar-text">
                      <span className="text-danger"> My </span>Portfolio Website
                    </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default function MyNAv(){
    return(
        <Navigation/>
    )
}