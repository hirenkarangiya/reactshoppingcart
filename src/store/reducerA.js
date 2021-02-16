const initialState = {
  a: 1,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "onUpdateA") {
    return {
      ...state,
      a: state.a + action.value,
    };
  }

  return newState;
};

export default reducer;
