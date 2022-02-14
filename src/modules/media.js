const MEDIA_TOGGLE = "media/toggle";

export const mediaToggle = (task) => ({
  type: MEDIA_TOGGLE,
  payload: { task },
});

const initialState = {
  darkmode: false,
};

export default function media(state = initialState, action) {
  switch (action.type) {
    case MEDIA_TOGGLE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    default:
      return state;
  }
}
