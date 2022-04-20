const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    token: undefined,
  },

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, user: { ...payload } };
    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};
