import React, { useState, useEffect } from "react";
import axios from "axios";
import serverLink from "../pseudoLinks/links"; // probably will be omitted
import { pServerLink } from "../pseudoLinks/links";

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
    setRestOfArticle((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
    // console.log(restOfArticle);
  };
  const onTextType = (e) => {
    setRestOfArticle((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
    // console.log(restOfArticle);
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
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  return (
    <div className="Uploader centralize corefunc">
      <div className="uploadPreview">
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
      </div>
      <form
        onSubmit={onSubmit}
        className="uploader__form"
        action={pServerLink + "/upload"}
        method="post"
      >
        <div>
          {/* <label htmlFor="file">File: </label> */}
          <input type="file" onChange={onFileLoad} />
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" onChange={onTitleType} placeholder="Title" />
        </div>
        <div>
          <label htmlFor="text">Text: </label>
          <input type="text" onChange={onTextType} placeholder="Text" />
        </div>
        <div>
          <span>
            <button type="button" onClick={cancelAndGoBack}>
              Cancel
            </button>
            <button type="submit">Upload</button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Uploader;
