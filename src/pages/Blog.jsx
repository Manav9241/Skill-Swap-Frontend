import React from "react";
import "./blog.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Widgets from "../components/Widgets/Widgets";
import Navbar from "../components/Navbar/Navbar"

const Blog = () => {
  return (
    <div className="app">
      <Navbar/>
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default Blog;
