import TopBar from "../topbar/TopBar";
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { login, isLoggedIn } from "../../services/authService";
import Card from "../card/Card";

import "./grid.css";

export default function Grid() {
  return (
    <>
      <div className="grid-container">
        <Card
          postData={{ title: "Hello world", body: "this is my first post" }}
        />{" "}
        <Card
          postData={{ title: "Hello world", body: "this is my first post" }}
        />{" "}
        <Card
          postData={{ title: "Hello world", body: "this is my first post" }}
        />{" "}
        <Card
          postData={{ title: "Hello world", body: "this is my first post" }}
        />
      </div>
    </>
  );
}
