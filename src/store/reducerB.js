const initialState = {
  b: 1,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "onUpdateB") {
    return {
      ...state,
      b: action.value + state.b,
    };
  }

  return newState;
};

export default reducer;
