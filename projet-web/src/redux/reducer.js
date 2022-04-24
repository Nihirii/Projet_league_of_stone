
//Valeurs initiales de user et du matchmaking 
const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    token: undefined,
  },

  matchM: {
    matchmakingId: "",
    request: "",
  },

};


//Mise a jour des états
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, user: { ...payload } };
    case "LOGOUT":
      return initialState;

    case "MATCHMAKING":
      return { ...state, matchM: { ...payload } };
    default:
      return state;
  }
};
