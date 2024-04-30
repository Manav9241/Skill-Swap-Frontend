import React, { useEffect, useState } from "react";
import "./Post.css";
import InputOption from "../InputOption/InputOption";
import { RxAvatar } from "react-icons/rx";
import { TfiAlignJustify } from "react-icons/tfi";
import { AiFillLike, AiTwotoneLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

import Popup from "../PopUp/PopUp";

const Post = ({ name, description, message, photourl }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="post">
      <div className="post__header">
        <RxAvatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p style={{ color: "gray" }}>{description}</p>
        </div>
        <button style={{ marginLeft: "auto" }} onClick={() => setOpen(true)}>
          <TfiAlignJustify />
        </button>
      </div>

      <div className="post__body">
        <p style={{ fontSize: 13, color: "gray" }}>{message}</p>
        <img src={photourl} alt="img.img" />
      </div>
      <div className="post__buttons">
        <InputOption Icon={AiFillLike} title="Like" color="gray" />
        <InputOption Icon={FaShare} title="Share" color="gray" />
        <InputOption Icon={FaSave} title="Share" color="gray" />
      </div>
      <Popup open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Post;
