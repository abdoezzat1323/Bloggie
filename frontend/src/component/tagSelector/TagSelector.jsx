import React, { useState, useCallback, useRef } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify";

import "./TagSelector.css"; // basic styles for this demo

const settings = {};

function TagSelector(props) {
  const tagifyRef = useRef();
  let categories = ["Sports"];
  const onChange = useCallback((e) => {
    if (e.detail.value)
      props.setCategories(
        JSON.parse(e.detail.value).map((a) => a.value.toLowerCase())
      );
    else props.setCategories([]);
  }, []);

  return (
    <>
      <Tags
        tagifyRef={tagifyRef}
        settings={settings}
        autoFocus={true}
        {...{
          whitelist: categories,
          placeholder: "type categories",
          maxLength: 3,
        }}
        onChange={onChange}
      />
    </>
  );
}

export default TagSelector;
