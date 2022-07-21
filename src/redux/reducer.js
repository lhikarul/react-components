export const reducer = (state, { type, payload }) => {
  if (type === "updateHolder") {
    return {
      ...state,
      holder: {
        ...state.holder,
        ...payload,
      },
    };
  } else {
    return state;
  }
};
