const UPLOAD = 'editor/UPLOAD'

export const upload = (file, title, text) => ({
  type: UPLOAD,
  payload: {
    file,
    title,
    text
  }
});

const initialState = {
  file: '',
  title: '',
  text: ''
}

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

