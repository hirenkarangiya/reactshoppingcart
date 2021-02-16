const initialState = {
  age: 21,
  history: [],
  products: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP_ASYNC":
      //newState.age += action.value;
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value,
        }),
        loading: false,
      };
      
    case "AGE_DOWN":
      //newState.age -= action.value;
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value,
        }),
      };

    case "AGE_DELETE":
      return {
        ...state,
        history: state.history.filter((el) => el.id !== action.value),
      };
      
    case "GET_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.json]
      }

    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return newState;
  }
};

export default reducer;
