import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Uploader from "../components/Uploader";
import { movePage } from "../modules/pages";

function UploadContainer() {
  return (
    <Uploader />
  );
}

export default UploadContainer;
