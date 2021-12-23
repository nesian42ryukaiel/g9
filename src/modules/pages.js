import axios from "axios";
import { pServerLink, artdata } from "../pseudoLinks/links";

const MOVE = "pages/MOVE";

export const movePage = (page) => ({
  type: MOVE,
  payload: {
    page
  }
});

const articleFormat = (titleText, imageURL, textText) => ({
  title: titleText,
  image: imageURL,
  text: textText
});

const initialState = {
  currentPage: "index",
  articles: axios
    .get(pServerLink + "/" + artdata)
    .then(function (response) {
      console.log("pages reducer got a "+ typeof response.data +": " + JSON.stringify(response.data));
      let artarray = JSON.parse(JSON.stringify(response.data));
      // console.log(artarray[1].text)
      return artarray;
    }) || []
};

export default function pages(state = initialState, action) {
  switch (action.type) {
    case MOVE:
      return {
        ...state,
        currentPage: action.payload.page
      };
    default:
      return state;
  }
}

