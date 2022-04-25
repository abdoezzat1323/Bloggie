import React, { Component } from "react";
import "./TextEditor.css";
import { Editor } from "@tinymce/tinymce-react";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(content, editor) {
    this.setState({ content });
    this.props.setBody({ content });
  }

  handleSubmit(event) {
    alert("Text was submitted: " + this.state.content);
    event.preventDefault();
  }

  render() {
    return (
      <form className="body11" onSubmit={this.handleSubmit}>
        <Editor
          apiKey="3xx0snovf5pxf0uhbvy1b63ipgb3nur333gshnd02y680lja"
          value={this.state.content}
          onEditorChange={this.handleChange}
          init={{
            plugins:
              "charmap anchor visualchars lists table emoticons wordcount link image code media",
            toolbar:
              "table wordcount | numlist bullist | emoticons | image | spellchecker language spellcheckdialog | undo redo | bold italic | alignleft aligncenter alignright | fontsizeselect",
            selector: "textarea",
            images_upload_url: "http://127.0.0.1:5000/api/upload",
            automatic_uploads: true,
            spellchecker_language: "en",
            font_size_formats:
              "8pt 10pt 12pt 14pt 18pt 24pt 36pt 46pt 56pt 66pt 76pt",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
          }}
        />
        <br />
        {/* <button className="input11"  type="submit" value="Submit" > Post </button> */}
      </form>
    );
  }
}
export default TextEditor;
