const MOVE = 'pages/MOVE';

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
  page: 'index',
  articles: [
    articleFormat('Aum', '../mock/aum.png', 'The letter Aum.'),
    articleFormat('Internet', '../mock/internet.png', 'The basics of the Internet.'),
    articleFormat('OOP', '../mock/oop.png', 'Object Oriented Programming.'),
  ]
};

export default function pages(state = initialState, action) {
  switch (action.type) {
    case MOVE:
      return {
        ...state,
        page: action.payload.page
      };
    default:
      return state;
  }
}

