import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Uploader from "../components/Uploader";
// import UploadForm from "../components/UploadForm";
import { movePage } from "../modules/pages";
import { editFile, editTitle, editText, editUpload } from "../modules/editor";

function UploadContainer() {
  const { mid, efile, etitle, etext } = useSelector((state) => ({
    mid: state.membership.mid,
    efile: state.editor.efile,
    etitle: state.editor.etitle,
    etext: state.editor.etext,
  }));
  const dispatch = useDispatch();
  const move = (page) => dispatch(movePage(page));
  const upload = (article) => dispatch(editUpload(article));
  const setFile = (file) => dispatch(editFile(file));
  const setTitle = (title) => dispatch(editTitle(title));
  const setText = (text) => dispatch(editText(text));
  // function to concat new article
  return (
    <Uploader
      mid={mid}
      efile={efile}
      etitle={etitle}
      etext={etext}
      move={move}
      upload={upload}
      setFile={setFile}
      setTitle={setTitle}
      setText={setText}
    />
    // <UploadForm />
  );
}

export default UploadContainer;
