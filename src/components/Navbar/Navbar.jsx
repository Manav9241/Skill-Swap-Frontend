// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (

//     <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <Link className="navbar-brand mx-3" to="#">Skill-Swap</Link>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                         <Link className="nav-link active" aria-current="page" to="#">Home</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link active" aria-current="page" to="#">About</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link active" aria-current="page" to="#">Contact Us</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link active" aria-current="page" to="#">Blog</Link>
//                     </li>
//                 </ul>
//                 <ul className="navbar-nav mb-2 mb-lg-0">
//                     <li>
//                         <form className="d-flex">
//                             {/* show this element when logged in */}
//                             <button className="btn btn-outline-success mx-2 my-2" type="submit">Search</button>
                        
//                             <button className="btn btn-outline-success mx-2 my-2" type="button">Login</button>
//                             <button className="btn btn-success mx-2 my-2" type="button">Register</button>
//                         </form>
//                     </li>

//                     {/* show this element when logged in */}
//                     <li className="nav-item dropdown">
//                         <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle" />
                            
//                         </Link>
//                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <li><Link className="dropdown-item" to="#">Dashboard</Link></li>
//                             <li><Link className="dropdown-item" to="#">Edit Profile</Link></li>
//                             <li><Link className="dropdown-item" to="#">Log Out</Link></li>
//                         </ul>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//         </nav>
//     </div>

//   )
// }

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './navbar.css'; // Import CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingLeft:'5%' , paddingRight:'5%'}}>
            <div className="container-fluid">
                <Link className="navbar-brand mx-3" to="/">Skill-Swap</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/blog">Blog</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
                        <li className="nav-item">
                            <Link className="btn btn-outline-success mx-2" to="/search">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-success mx-2" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-success mx-2" to="/register">Register</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" alt="User" width="40" height="40" className="rounded-circle" />
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{left:'auto'}} >
                                <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                                <li><Link className="dropdown-item" to="/edit-profile">Edit Profile</Link></li>
                                <li><Link className="dropdown-item" to="/logout">Log Out</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;