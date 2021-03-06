// import axios from "axios";
// import { pServerLink, artdata } from "../pseudoLinks/links";

const MOVE = "pages/MOVE";
const UPLOAD = "pages/UPLOAD";

export const movePage = (page) => ({
  type: MOVE,
  payload: {
    page,
  },
});
export const uploadPage = (article) => ({
  type: UPLOAD,
  payload: {
    article,
  },
});

// const articleFormat = (titleText, imageURL, textText) => ({
//   title: titleText,
//   image: imageURL,
//   text: textText
// });

const initialState = {
  currentPage: "index",
  articles: [],
};

export default function pages(state = initialState, action) {
  switch (action.type) {
    case MOVE:
      return {
        ...state,
        currentPage: action.payload.page,
      };
    case UPLOAD:
      return {
        ...state,
        articles: [...state.articles, action.payload.article],
      };
    default:
      return state;
  }
}
