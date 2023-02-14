export const authActionTypes = {
  LOG_OUT: "LOG_OUT",
  LOG_IN: "LOG_IN",
};

const initialState = {
  email: "",
  isAuthorized: false,
};

export const authsReducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case authActionTypes.LOG_IN:
      return {
        ...state,
        email: action.payload,
        isAuthorized: true,
      };
    case authActionTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};
