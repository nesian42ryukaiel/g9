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
  articles: [
    articleFormat("Aum", "./mock/aum.png", "The letter Aum."),
    articleFormat("Internet", "./mock/internet.png", "The basics of the Internet."),
    articleFormat("OOP", "./mock/oop.png", "Object Oriented Programming."),
    articleFormat("Link-test", "./logo192.png", "...in the public directory!"),
  ]
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

