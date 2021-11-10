import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Uploader from "../components/Uploader";
import { movePage } from "../modules/pages";

function UploadContainer() {
  const { id } = useSelector(state => ({
    id: state.membership.id
  }));
  const dispatch = useDispatch();
  // function to concat new article
  return (
    <Uploader id={id}/>
  );
}

export default UploadContainer;
