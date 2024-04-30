import React ,{useState}from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './navbar.css'; // Import CSS file for styling

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="bg-gray-100 shadow-md" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    <Link className="text-xl font-bold" to="/">Skill-Swap</Link>
                    <button className="block lg:hidden focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <div className="hidden lg:flex space-x-4">
                        <ul className="flex space-x-4">
                            <li>
                                <Link className="hover:text-gray-700" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-700" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-700" to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-700" to="/blog">Blog</Link>
                            </li>
                        </ul>
                        <ul className="flex space-x-4">
                            <li>
                                <Link className="hover:bg-black text-green-500 px-4 py-2 rounded-full" to="/search">Search</Link>
                            </li>
                            <li>
                                <Link className="hover:bg-black text-green-500 px-4 py-2 rounded-full" to="/login">Login</Link>
                            </li>
                            <li>
                                <Link className="bg-black hover:bg-green-600 text-white px-4 py-2 rounded-full" to="/register">Register</Link>
                            </li>
                            <li className="relative" onClick={toggleDropdown}>
                                <button className="block focus:outline-none" id="userDropdown">
                                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" alt="User" width="40" height="40" className="rounded-full" />
                                </button>
                                <ul className={`dropdown-menu absolute text-gray-700 bg-white shadow-lg rounded-md mt-2 py-1 ${isDropdownOpen ? 'block' : 'hidden'}`} aria-labelledby="userDropdown" style={{ zIndex: 9999 }}>
                                    <li><Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/dashboard">Dashboard</Link></li>
                                    <li><Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/edit-profile">Edit Profile</Link></li>
                                    <li><Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/logout">Log Out</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
