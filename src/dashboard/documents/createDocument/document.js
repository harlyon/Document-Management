import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const CreateDocument = () => {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content, editor);
  };

  return (
    <div className="col-lg-8 col-12">
      <div className="rounded shadow p-4">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="mb-0">New Documents:</h5>
        </div>
        <div className="row">
          <Editor
            apiKey="2gwon17yu0kzt9dzxyk9f1jvt49iohjxcg297ionak64oeg4"
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
        <br />
        <button
          className="col-lg-6"
          type="submit"
          className="btn btn-primary btn"
        >
          Upload{" "}
        </button>
      </div>
    </div>
  );
};

export default CreateDocument;
