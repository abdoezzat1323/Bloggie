import TopBar from "../../component/topbar/TopBar";
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { login, isLoggedIn } from "../../services/authService";
import "./card.css";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="bg-img"></div>
      <div className="content">
        <h4>{props.postData.title}</h4>
        <p>{props.postData.body}</p> <button>Readmore</button>{" "}
      </div>
    </div>
  );
}
