export const loading = () => {
  return { type: "LOADING" };
};

export const ageUpAsync = (val) => {
  return { type: "AGE_UP", value: val };
};

export const ageUp = (val) => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(ageUpAsync(val));
    }, 5000);
  };
};

export const ageDown = (val) => {
  return { type: "AGE_DOWN", value: val };
};
