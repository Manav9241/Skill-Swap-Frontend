import React from "react";
import "./Widgets.css";
import { FaAirbnb } from "react-icons/fa";
import { CgMoreVerticalO } from "react-icons/cg";
import { FaDotCircle } from "react-icons/fa";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FaDotCircle />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Top Courses</h2>
        <CgMoreVerticalO />
      </div>

      {newsArticle("React is back", "No of Students : 10")}
      {newsArticle("Learn Cpp With Manav", "No of Students : 13")}
      {newsArticle("Explore Java With Ritik", "No of Students : 7")}
    </div>
  );
};

export default Widgets;
