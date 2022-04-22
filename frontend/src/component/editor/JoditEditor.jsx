import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const JoditEditor = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        onInit={(_evt , editor) => editorRef.current = editor}

      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}

export default JoditEditor;