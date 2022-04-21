export const LogInAction = (payload) => {
  const { id, name, email, token } = payload;
  

  return { type: "LOGIN", payload: { id, name, email, token } };
};

export const LogOutAction = (payload) => {
  
    return { type: "LOGOUT", payload: { } };
};
  


export const MatchMaking = (payload) => {
  const {matchmakingId, request} = payload;


  return { type: "MATCHMAKING", payload: { matchmakingId, request} };
};

export const ALLMATCHMAKING = (payload) => {
  const ALLMATCHMAKING = payload;


  return { type: "ALLMATCHMAKING", payload: { payload} };
};