import React, { useState } from "react";
import "./addprojects.css";
import cancel from "../../assets/icons/close.png";
const AddProjects = (props) => {
  const [imgFile, uploadImg] = useState([]);
  const imagePreview = (e) => {
    if (e.target.files.length !== 0) {
      uploadImg((imgFile) => [
        ...imgFile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  return props.trigger ? (
    <div className="postclose">
      <div className="projects_main">
        <form>
          <div className="addprojects">
            <h2>Add Projects</h2>
            <input type="text" placeholder="Project title" required />
            <textarea
              placeholder="Project Description"
              rows={20}
              cols={30}
            ></textarea>
          </div>
          <div className="preview">
            <h2>Preview</h2>
            {imgFile.map((elem) => {
              return (
                <span key={elem}>
                  <img src={elem} height={200} width={100} alt="image" />
                </span>
              );
            })}
            <input type="file" onChange={imagePreview} required />
            <button id="sendpost">Add Projects</button>
          </div>
        </form>
      </div>
      <button onClick={() => props.setTrigger(false)}>
        <img src={cancel} alt="cancel" />
      </button>
    </div>
  ) : (
    ""
  );
};
export default AddProjects;
