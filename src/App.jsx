import React from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Profile from "./components/Profile/Profile";
import Search from "./pages/Search";
import ContactUs from './pages/ContactUs'
import Login from './components/Login/Login'

import Regsiter from "./components/Register/Register";

import EditProfile from './pages/EditProfile/EditProfile'
import HomeChat from "./pages/HomeChat";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/chats" Component={HomeChat}></Route>
        <Route exact path="/contact" Component={ContactUs}></Route>
        <Route exact path="/search" Component={Search}></Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route exact path="/login" element={<Login type='login'/>}></Route>
        <Route exact path="/register" element={<Login type='register'/>}></Route> */}

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Regsiter />} />

        <Route path="/edit-profile" element={<EditProfile/>}/>

      </Routes>
    </BrowserRouter>
  );
}
