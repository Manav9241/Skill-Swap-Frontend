import { RxAvatar } from "react-icons/rx";

import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://s.itl.cat/pngfile/s/210-2103455_good-background-photo-for-linkedin-page-linkedin-background.jpg"
          alt=""
        />
        <RxAvatar
          className="sidebar__avatar"
          src="https://i.insider.com/5d66d21e6f24eb396b6c8192?width=700"
        />
        <h2>Baijnath Mahto</h2>
        <h4>baijnathmahto123@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Enrolled Courses</p>
          <p className="sidebar__statNumber">5</p>
        </div>
        <div className="sidebar__stat">
          <p>Class Taken</p>
          <p className="sidebar__statNumber">2</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p style={{ fontSize: 13 }}>Recent Learn course</p>
        <div className="sidebar__recent">
          {recentItem("react.js")}
          {recentItem("node.js")}
          {recentItem("Java")}
          {recentItem("next.js")}
          {recentItem("angular.js")}
          {recentItem("vue.js")}
          {recentItem("react-native")}
        </div>

        <p style={{ color: "#031527", marginTop: 20, fontSize: 13 }}>
          I can Teach ??
        </p>
        <div className="sidebar__recent">
          {recentItem("React")}
          {recentItem("C++")}
          {recentItem("Javascript")}
          {recentItem("Java")}
          {recentItem("App Development")}
        </div>

        <p style={{ color: "#0A66C2", marginTop: 20, fontSize: 13 }}>Skills</p>
        <div className="sidebar__recent">
          {recentItem("Java")}
          {recentItem("C++")}
          {recentItem("React")}
          {recentItem("Javascript")}
        </div>
        <div className="sidebarRecent__bottom">
          <h2
            style={{
              color: "gray",
              fontSize: 15,
              fontWeight: 400,
              alignSelf: "center",
              padding: 10,
            }}
          >
            Discover more
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
