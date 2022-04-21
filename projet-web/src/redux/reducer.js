const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    token: undefined,
  },

  matchM: { 
    matchmakingId: "", 
    request:"",
  },

  AllMatch: [],

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, user: { ...payload } };
    case "LOGOUT":
      return initialState;

    case "MATCHMAKING":
      return { ...state, matchM: { ...payload } };
    case "ALLMATCHMAKING":
      return { ...state, AllMatch: { ...payload } };
  default:
      return state;
  }
};
