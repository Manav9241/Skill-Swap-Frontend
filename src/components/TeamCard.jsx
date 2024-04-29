import React from 'react';
import './Card/card.css';
const TeamCard = (props) => {
    return (
        <div className="card-member">
            <div className="card-left">
                <div className="card-image-container">
                    <img src={props.member.img} alt="User" className="card-image" />
                </div>
            </div>

            <div className="card-right-member">
                <div className="user-info">
                <h3>{props.member.name}</h3>
                <p>Roll No: {props.member.rollNumber}</p>
                <p>Email: {props.member.email}</p>
                </div>
                    {/* <img src={props.member.img} alt="user"/>
                    <h3 style={{marginBottom: "10px"}}>{props.member.name}</h3>
                    <p style={{marginBottom: "5px"}}>Roll No: {props.member.rollNumber}</p>
                    <p style={{marginBottom: "5px"}}>Email: {props.member.email}</p> */}
                    {/* Add other details here */}
            </div>
        </div>
    );
}

export default TeamCard;
