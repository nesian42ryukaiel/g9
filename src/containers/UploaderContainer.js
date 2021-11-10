import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Uploader from "../components/Uploader";
import { movePage } from "../modules/pages";

function UploadContainer() {
  // so far nothing from the store is required
  const dispatch = useDispatch();
  // function to concat new article
  return (
    <Uploader />
  );
}

export default UploadContainer;
