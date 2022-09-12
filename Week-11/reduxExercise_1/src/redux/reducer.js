const reducer = (state = true, action) => {
  switch (action.type) {
    case "FLIP":
      return !state;
    default:
      return state;
  }
};
export default reducer;
