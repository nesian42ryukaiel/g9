import React, { useState } from "react";
import axios from "axios";

import serverLink from "../pseudoLinks/links";

function Uploader({ mid, move }) {
  // needs user id from state
  const [content, setContent] = useState(""); // state that stores sending image
  const [uploadedImg, setUploadedImg] = useState({
    fileName: "",
    fillPath: "",
  });
  const [restOfArticle, setRestOfArticle] = useState({
    title: "",
    text: "",
    writer: mid,
  });
  const onFileLoad = (e) => {
    setContent(e.target.files[0]);
  };
  const onTitleType = (e) => {
    setRestOfArticle(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", content);
    axios
      .post(serverLink + "/upload", formData)
      .then((res) => {
        const { fileName } = res.data;
        console.log(fileName);
        setUploadedImg({ fileName, filePath: `${serverLink}/img/${fileName}` });
        alert("The file is successfully uploaded");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const cancelAndGoBack = (e) => {
    move("index");
  };
  return (
    <div className="Uploader centralize corefunc">
      <form onSubmit={onSubmit} className="uploader__form">
        {uploadedImg ? (
          <>
            <img
              src={uploadedImg.filePath}
              alt=""
              id="ul--output"
              width="256"
            />
            <h3>{uploadedImg.fileName}</h3>
          </>
        ) : (
          ""
        )}
        <input type="file" onChange={onFileLoad} />
        <br />
        <input type="text" onChange={onFileLoad} placeholder="Title" />
        <br />
        <input type="text" onChange={onFileLoad} placeholder="Text" />
        <span>
          <button type="button" onClick={cancelAndGoBack}>
            Cancel
          </button>
          <button type="submit">Upload</button>
        </span>
      </form>
    </div>
  );
}

export default Uploader;
