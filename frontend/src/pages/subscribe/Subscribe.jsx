import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { setPremium } from "../../services/userService";
import {
  getIsAdminCookie,
  getIsPremiumCookie,
} from "../../services/helperService";
import "./Subscribe.css";
import "../../component/topbar/topbar.css";
import TopBar from "../../component/topbar/TopBar";

export default function Subscribe() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let res = await setPremium();
    if (res) {
      navigate("/");
    }
  };

  return getIsAdminCookie() || getIsPremiumCookie() ? (
    <Navigate to="/" />
  ) : (
    <>
      <TopBar />

      <div className="subscribe-bg">
        <span className="subtitle">Subscribe to our Premium plan</span>
        <span className="subtitle-2">Only 2000$</span>
        <form onSubmit={handleSubmit} className="loginForm">
          <br></br>
          <button onClick={handleSubmit} className="subscribe">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
