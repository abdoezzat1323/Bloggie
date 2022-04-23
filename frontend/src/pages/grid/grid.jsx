import TopBar from "../../component/topbar/TopBar";
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { login, isLoggedIn } from "../../services/authService";
import "./grid.css";

export default function Grid() {
  return (
    <div class="cards">
      <div class="card">ONE</div>
      <div class="card">TWO</div>
      <div class="card">THREE</div>
      <div class="card">FOUR</div>
      <div class="card">FIVE</div>
      <div class="card">SIX</div>
      <div class="card">SEVEN</div>
      <div class="card">EIGHT</div>
      <div class="card">NINE</div>
      <div class="card">TEN</div>
      <div class="card">ELEVEN</div>
      <div class="card">TWELVE</div>
    </div>
  );
}
