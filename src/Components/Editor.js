import React from "react";
import "../Editor.css";
function Editor() {
  return (
    <div className="editor">
      <form>
        <input id="title" type="text" placeholder="Article Title" />
        <input
          className="description-editor"
          type="text"
          placeholder="What's this article about?"
        />
        <textarea
          rows="10"
          className="textarea-editor"
          type="text"
          placeholder="Write your article (in markdown)"
        ></textarea>
        <input className="description" type="text" placeholder="Tags" />
        <button className="publish">Publish Article</button>
      </form>
    </div>
  );
}
export default Editor;
