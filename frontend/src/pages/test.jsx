// import React, { useRef } from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// export default function App() {
//   const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
//   return (
//     <>
//     <Editor
//          onInit={(evt, editor) => editorRef.current = editor}
//          initialValue="<p>This is the initial content of the editor.</p>"

//        />
//     <script src="/path/to/tinymce.min.js"></script>


//       <button onClick={log}>Log editor content</button>
//     </>
//   );
// }
