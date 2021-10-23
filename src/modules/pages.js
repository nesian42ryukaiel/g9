const MOVE = 'pages/MOVE';

export const movePage = (page) => ({
  type: MOVE,
  payload: {
    page
  }
});

const initialState = {
  page: 'index',
  articles: []
};

export default function pagesReducer(state = initialState, action) {
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

