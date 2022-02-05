import React, { useState, useEffect } from "react";
import axios from "axios";
import serverLink from "../pseudoLinks/links"; // probably will be omitted
import { pServerLink } from "../pseudoLinks/links";
import Base64 from "../modules/Base64";

function Uploader({
  mid,
  efile,
  etitle,
  etext,
  move,
  upload,
  setFile,
  setTitle,
  setText,
}) {
  const onFileLoad = (e) => {
    setFile(e.target.files[0]);
    console.log(efile);
    console.log(efile.filePath);
  };
  const onTitleType = (e) => {
    setTitle(e.target.value);
    console.log(etitle);
  };
  const onTextType = (e) => {
    setText(e.target.value);
    console.log(etext);
  };
  const onSubmit = (e) => {
    console.log("honk");
    // do something here to encode file name
    // and move to a custom landing page if successful
    return true;
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append("img", content);
    // axios
    //   .post(serverLink + "/upload", formData)
    //   .then((res) => {
    //     const { fileName } = res.data;
    //     console.log(fileName);
    //     setUploadedImg({ fileName, filePath: `${serverLink}/img/${fileName}` });
    //     alert("The file is successfully uploaded");
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  const cancelAndGoBack = (e) => {
    move("index");
  };
  useEffect(() => {
    console.log("업로드 컴포넌트가 화면에 나타남");
    return () => {
      console.log("업로드 컴포넌트가 화면에서 사라짐");
    };
  }, []);
  return (
    <div className="Uploader centralize corefunc">
      <div></div>
      <div className="uploadPreview">
        {efile ? (
          <>
            <img src={efile.filePath} alt="" id="ul--output" width="256" />
            <h3>{efile.fileName}</h3>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="Uploader__pseudoForm" id="Uploader__pseudoForm">
        <div>
          <input
            type="file"
            name="articleFile"
            onChange={onFileLoad}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="articleWriter"
            value={mid !== "" ? mid : "PH"}
            style={{ width: "50%" }}
            readOnly
          />
        </div>
        <div>
          <input
            type="text"
            name="articleTitle"
            onChange={onTitleType}
            placeholder="Title"
            style={{ width: "50%" }}
            required
          />
        </div>
        <div>
          <textarea
            name="articleText"
            onChange={onTextType}
            style={{ width: "50%" }}
            // cols={40}
            rows={5}
            placeholder="Text (optional)"
          />
        </div>
        <div>
          <span>
            <button type="button" onClick={cancelAndGoBack}>
              Cancel
            </button>
            <button type="button" onClick={onSubmit}>
              Upload
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Uploader;

// <div className="Uploader centralize corefunc">
//   <div className="uploadPreview">
//     {/* {content ? (
//       <>
//         <img src={content.filePath} alt="" id="ul--output" width="256" />
//         <h3>{content.fileName}</h3>
//       </>
//     ) : (
//       ""
//     )} */}
//   </div>
//   <form
//     onSubmit={onSubmit} // get confirmation message during test
//     className="uploader__form"
//     action={pServerLink + "/upload"}
//     method="post"
//   >
//     <div className="uploadPreview">
//       <img src={content.filePath} alt="" id="ulOutput" width="256" />
//       <h3>{content.fileName}</h3>
//     </div>
//     <div>
//       {/* <label htmlFor="file">File: </label>
//       <br /> */}
//       <input
//         type="file"
//         name="articleFile"
//         onChange={onFileLoad}
//         required
//       />
//     </div>
//     <div>
//       <input
//         type="text"
//         name="articleWriter"
//         value={mid !== "" ? mid : "PH"}
//         style={{ width: "50%" }}
//         readOnly
//       />
//     </div>
//     <div>
//       {/* <label htmlFor="title">Title</label>
//       <br /> */}
//       <input
//         type="text"
//         name="articleTitle"
//         onChange={onTitleType}
//         placeholder="Title"
//         style={{ width: "50%" }}
//         required
//       />
//     </div>
//     <div>
//       {/* <label htmlFor="text">
//         Text {"("}optional{")"}
//       </label>
//       <br /> */}
//       <textarea
//         name="articleText"
//         onChange={onTextType}
//         style={{ width: "50%" }}
//         // cols={40}
//         rows={5}
//         placeholder="Text (optional)"
//       />
//     </div>
//     <div>
//       <span>
//         <button type="button" onClick={cancelAndGoBack}>
//           Cancel
//         </button>
//         <button type="submit">Upload</button>
//       </span>
//     </div>
//   </form>
// </div>
