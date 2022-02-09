const EDIT_UPLOAD = "editor/UPLOAD";
const EDIT_FILE = "editor/FILE";
const EDIT_TITLE = "editor/TITLE";
const EDIT_TEXT = "editor/TEXT";

// action creators
export const editUpload = (task) => ({
  type: EDIT_UPLOAD,
  payload: {
    task,
  },
});
export const editFile = (task) => ({
  type: EDIT_FILE,
  payload: {
    task,
  },
});
export const editTitle = (task) => ({
  type: EDIT_TITLE,
  payload: {
    task,
  },
});
export const editText = (task) => ({
  type: EDIT_TEXT,
  payload: {
    task,
  },
});

const initialState = {
  efile: [],
  etitle: "",
  etext: "",
};

// reducer
export default function editor(state = initialState, action) {
  switch (action.type) {
    case EDIT_UPLOAD:
      return {
        ...state,
        efile: [],
        etitle: "",
        etext: "",
      };
    case EDIT_FILE:
      return {
        ...state,
        efile: action.payload.task,
      };
    case EDIT_TITLE:
      return {
        ...state,
        etitle: action.payload.task,
      };
    case EDIT_TEXT:
      return {
        ...state,
        etext: action.payload.task,
      };
    default:
      return state;
  }
}
