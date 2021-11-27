import React, {useState} from "react";
import axios from "axios";

import serverLink from "../pseudoLinks/links";

function UploadForm() {
  const [content, setContent] = useState(""); // state that stores sending image
  const [uploadedImg, setUploadedImg] = useState({
    fileName: "",
    fillPath: ""
  });
  const onChange = e => {
    setContent(e.target.files[0]);
  };
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", content); 
    axios
      .post(serverLink + "/upload", formData)
      .then(res => {
        const { fileName } = res.data;
        console.log(fileName);
        setUploadedImg({ fileName, filePath: `${serverLink}/img/${fileName}` });
        alert("The file is successfully uploaded");
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className='Uploader centralize corefunc'>
      <form onSubmit={onSubmit} className='uploader__form'>
        {uploadedImg ? (
          <>
            <img src={uploadedImg.filePath} alt=""
            id='ul--output' width='256' />
            <h3>{uploadedImg.fileName}</h3>
          </>
        ) : (
          ""
        )}
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadForm;
