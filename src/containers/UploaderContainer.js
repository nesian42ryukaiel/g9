import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Uploader from "../components/Uploader";
// import UploadForm from "../components/UploadForm";
import { movePage } from "../modules/pages";

function UploadContainer() {
  const { mid } = useSelector((state) => ({
    mid: state.membership.mid,
  }));
  const dispatch = useDispatch();
  const move = (page) => dispatch(movePage(page));
  // function to concat new article
  return (
    <Uploader mid={mid} move={move} />
    // <UploadForm />
  );
}

export default UploadContainer;
