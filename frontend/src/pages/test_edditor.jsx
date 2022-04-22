// import React from "react";
// import ReactDOM from "react-dom";
// import { Editor } from "@tinymce/tinymce-react";

// const charCount = (editor) => editor.getContent({ format: "text" }).length;

// export default function Ass() {
//   const sizeLimit = 30;
//   const [data, setData] = React.useState("<p>Hello world</p>");
//   const [count, setCount] = React.useState(0);

//   const handleInit = (value, editor) => {
//     setCount(charCount(editor));
//   };

//   const handleUpdate = (value, editor) => {
//     const cCount = charCount(editor);
//     if (cCount <= sizeLimit) {
//       setData(value);
//       setCount(cCount);
//     }
//   };

//   const handleBeforeAddUndo = (evt, editor) => {
//     // note that this is the opposite test as in handleUpdate
//     // because we are determining when to deny adding an undo level
//     if (charCount(editor) > sizeLimit) {
//       evt.preventDefault();
//     }
//   };

//   return (
//     <div>
//       <h1>Controlled component with a length restriction</h1>
//       <Editor
//         apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
//         init={{ height: 300, plugins: "wordcount" }}
//         value={data}
//         onInit={handleInit}
//         onEditorChange={handleUpdate}
//         onBeforeAddUndo={handleBeforeAddUndo}
//       />
//       <p>Remaining: {sizeLimit - count}</p>
//       <h2>Known problems:</h2>
//       <ul>
//         <li>
//           On Firefox whitespace at end is trimmed on setContent which causes
//           problems setting the cursor.
//         </li>
//       </ul>
//     </div>
//   );
// }