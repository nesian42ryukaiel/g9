const INPUT_ID = 'input/ID';
const INPUT_PASS = 'input/PASS';

const inputID = (task) => ({
  type: INPUT_ID,
  payload: {
    task
  }
});
const inputPass = (task) => ({
  type: INPUT_PASS,
  payload: {
    task
  }
});

const initialState = {
  id: '',
  password: ''
}

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_ID:
      return {
        ...state,
        id: action.payload.task
      };
    case INPUT_PASS:
      return {
      ...state,
      password: action.payload.task
      };
    default:
      return state;
  }
}