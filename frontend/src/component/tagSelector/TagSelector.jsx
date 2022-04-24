import React, { useState, useCallback, useRef } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify";

import "./TagSelector.css"; // basic styles for this demo

const settings = {};

function TagSelector() {
  const tagifyRef = useRef();
  let categories = ["Sports"];
  const onChange = useCallback((e) => {
    console.log("CHANGED:", e.detail.value);
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
