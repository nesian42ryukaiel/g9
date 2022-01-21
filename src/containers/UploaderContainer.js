import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Uploader from "../components/Uploader";
import UploadForm from "../components/UploadForm";
// import { movePage } from "../modules/pages";

function UploadContainer() {
  const { id } = useSelector((state) => ({
    mid: state.membership.mid,
  }));
  // const dispatch = useDispatch();
  // function to concat new article
  return (
    <Uploader mid={mid} />
    // <UploadForm />
  );
}

export default UploadContainer;
