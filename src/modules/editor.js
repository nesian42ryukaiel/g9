const UPLOAD = "editor/UPLOAD"

// action creators
export const upload = (file, title, text) => ({
  type: UPLOAD,
  payload: {
    file,
    title,
    text
  }
});

const initialState = {
  uploader: {
    ufile: "",
    utitle: "",
    utext: ""
  },
  editor: {
    efile: "",
    etitle: "",
    etext: ""
  },
}

// reducer
export default function editor(state = initialState, action) {
  switch (action.type) {
    case UPLOAD:
      return {
        ...state,
        page: action.payload.page
      };
    default:
      return state;
  }
}

