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
        <div className="card">
          <div className="bg-img"></div>
          <div className="content">
            <h4>Card title</h4>
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
            </p>{" "}
            <button>Readmore</button>{" "}
          </div>
        </div>
        <div className="card">
          <div className="bg-img"></div>
          <div className="content">
            <h4>Card title</h4>
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
            </p>{" "}
            <button>Readmore</button>{" "}
          </div>
        </div>
        <div className="card">
          <div className="bg-img"></div>
          <div className="content">
            <h4>Card title</h4>
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
            </p>{" "}
            <button>Readmore</button>{" "}
          </div>
        </div>
        <div className="card">
          <div className="bg-img"></div>
          <div className="content">
            <h4>Card title</h4>
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
            </p>{" "}
            <button>Readmore</button>{" "}
          </div>
        </div>
        <div className="card">
          <div className="bg-img"></div>
          <div className="content">
            <h4>Card title</h4>
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
            </p>{" "}
            <button>Readmore</button>{" "}
          </div>
        </div>
        <div className="card">...</div>
        <div className="card">...</div>
      </div>
    </>
  );
}
