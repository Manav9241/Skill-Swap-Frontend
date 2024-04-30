import React, { useState } from "react";
import "./PopUp.css";
import { FaCopy, FaSave } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";

const Popup = ({ open, onClose }) => {
  return open ? (
    <div className="popup" onClick={onClose}>
      <div className="popup__option">
        <div className="popup__left">
          <FaSave style={{ color: "gray" }} />
        </div>
        <div className="popup__right">
          <h1 style={{ fontSize: 13, fontWeight: 400 }}>Save</h1>
          <h1 style={{ fontSize: 11, fontWeight: 200 }}>Save for later</h1>
        </div>
      </div>

      <div className="popup__option">
        <div className="popup__left">
          <RiUserFollowLine style={{ color: "gray" }} />
        </div>
        <div className="popup__right">
          <h1 style={{ fontSize: 13, fontWeight: 400 }}>Follow</h1>
          <h1 style={{ fontSize: 11, fontWeight: 200 }}>Stay connected</h1>
        </div>
      </div>

      <div className="popup__option">
        <div className="popup__left">
          <FaCopy style={{ color: "gray" }} />
        </div>
        <div className="popup__right">
          <h1 style={{ fontSize: 13, fontWeight: 400 }}>Copy</h1>
          <h1 style={{ fontSize: 11, fontWeight: 200 }}> Share the Link</h1>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
