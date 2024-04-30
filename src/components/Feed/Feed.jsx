import React, { useState } from "react";
import "./Feed.css";
import Post from "../Post/Post";
import InputOption from "../InputOption/InputOption";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaAirbnb } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const sendPost = (event) => {
    setPosts([...posts]);
  };
  return (
    <div className="feed">
      {/* <div className="feed__inputContainer">
        <div className="feed__input">
          <MdOutlineLocalPostOffice />
          <form>
            <input />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={IoMdPhotos} title="Photo" color="#70b5f9" />
          <InputOption Icon={FaVideo} title="Video" color="#e7a33e" />
          <InputOption Icon={MdEventAvailable} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={MdOutlineArticle}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div> */}
      {posts.map(() => (
        <Post />
      ))}
      <Post
        name="ProgrammingSchool"
        description="programmingacademy"
        message='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet'
        photourl="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
      />
      <Post
        name="Clever Developer"
        description="codinghero"
        message='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet'
        photourl="https://k2bindia.com/wp-content/uploads/2015/08/React.png"
      />
      <Post
        name="Frontend Developer"
        description="flutterguru"
        message='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet'
        photourl="https://k2bindia.com/wp-content/uploads/2015/08/React.png"
      />
      <Post
        name="Coding Hero"
        description="javascriptdev"
        message='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet'
        photourl="https://k2bindia.com/wp-content/uploads/2015/08/React.png"
      />
      <Post
        name="WebCoders"
        description="reactnativeguru"
        message='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet'
        photourl="https://k2bindia.com/wp-content/uploads/2015/08/React.png"
      />
      <Post
        name="CleverProgrammer"
        description="codeacademy"
        message='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet'
        photourl="https://k2bindia.com/wp-content/uploads/2015/08/React.png"
      />
      <Post
        name="ProgrammingKnowledge"
        description="frontenddeveloper"
        message='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet'
        photourl="https://k2bindia.com/wp-content/uploads/2015/08/React.png"
      />
    </div>
  );
};

export default Feed;
