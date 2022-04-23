import TopBar from "../../component/topbar/TopBar";
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { login, isLoggedIn } from "../../services/authService";
import "./card.css";

export default function Card() {
  return (
    <div class="postcard">
      <div class="bg-img"></div>
      <div class="cardContent">
        <h4>Card title</h4>
        <p>Content....</p> <button>Readmore</button>{" "}
      </div>
    </div>
  );
}
