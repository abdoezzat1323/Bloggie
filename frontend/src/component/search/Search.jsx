import React, { useState } from "react";
import "./search.css";
import { BiSearch } from "react-icons/bi";
import { NavLink, useNavigate, Link } from "react-router-dom";

export default function Search(props) {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newPosts = props.posts.filter((value) => {
      return (
        value.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.body.toLowerCase().includes(searchWord.toLowerCase()) ||
        JSON.stringify(value.categories)
          .toLowerCase()
          .includes(searchWord.toLowerCase())
      );
    });
    if (searchWord === "") {
      props.setFinalPosts(props.posts);
    } else {
      props.setFinalPosts(newPosts);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <BiSearch />
        </div>
      </div>
    </div>
  );
}
