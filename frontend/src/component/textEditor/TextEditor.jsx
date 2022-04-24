import React, { Component } from "react";
import "./TextEditor.css";
import { Editor } from "@tinymce/tinymce-react";

class JoditEditor extends React.Component {
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
          apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
          value={this.state.content}
          onEditorChange={this.handleChange}
          init={{
            plugins:
              " styleselect |fontsize |table wordcount |charmap| anchor | visualchars | lists | table |emoticons | wordcount | link image code |  media | searchreplace | code tinymcespellchecker link",
            toolbar:
              "styleselect |fontsize |table wordcount | numlist bullist |emoticons  | spellchecker language spellcheckdialog | undo redo | bold italic | alignleft aligncenter alignright |fontsizeselect",
            selector: "textarea",
            images_upload_url: "http://127.0.0.1:5000/api/upload",
            automatic_uploads: true,
            spellchecker_language: "en",
            font_size_formats:
              "8pt 10pt 12pt 14pt 18pt 24pt 36pt 46pt 56pt 66pt 76pt",

            content_langs: [
              { title: "English (US)", code: "en_US" },
              {
                title: "English (US Medical)",
                code: "en_US",
                customCode: "en_US-medical",
              },
              { title: "English (UK)", code: "en_UK" },
              {
                title: "English (UK Medical)",
                code: "en_UK",
                customCode: "en_UK-medical",
              },
              { title: "Spanish", code: "es" },
              { title: "French", code: "fr" },
              { title: "German", code: "de" },
              { title: "Portuguese", code: "pt" },
              { title: "Chinese", code: "zh" },
            ],
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <br />
        {/* <button className="input11"  type="submit" value="Submit" > Post </button> */}
      </form>
    );
  }
}
export default JoditEditor;
