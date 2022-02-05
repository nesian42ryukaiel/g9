const INPUT_ID = "input/ID";
const INPUT_PW = "input/PW";
const INPUT_FILE = "input/FILE";
const INPUT_TITLE = "input/title";
const INPUT_TEXT = "input/text";

export const inputFile = (task) => ({
  type: INPUT_FILE,
  payload: {
    task,
  },
});
export const inputTitle = (task) => ({
  type: INPUT_TITLE,
  payload: {
    task,
  },
});
export const inputText = (task) => ({
  type: INPUT_TEXT,
  payload: {
    task,
  },
});
export const inputID = (task) => ({
  type: INPUT_ID,
  payload: {
    task,
  },
});
export const inputPw = (task) => ({
  type: INPUT_PW,
  payload: {
    task,
  },
});

const initialState = {
  ifile: [],
  ititle: "",
  itext: "",
};

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_FILE:
      return {
        ...state,
        ifile: action.payload.task,
      };
    case INPUT_TITLE:
      return {
        ...state,
        ititle: action.payload.task,
      };
    case INPUT_TEXT:
      return {
        ...state,
        itext: action.payload.task,
      };
    case INPUT_ID:
      return {
        ...state,
        iid: action.payload.task,
      };
    case INPUT_PW:
      return {
        ...state,
        ipw: action.payload.task,
      };
    default:
      return state;
  }
}
