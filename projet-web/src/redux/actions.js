
//Actions connexion(actions pour initier un changement d'état)
export const LogInAction = (payload) => {
  const { id, name, email, token } = payload;
  

  return { type: "LOGIN", payload: { id, name, email, token } };
};

//Déconnexion (actions pour initier un changement d'état)
export const LogOutAction = (payload) => {
  
    return { type: "LOGOUT", payload: { } };
};
  
//Matchmaking (actions pour initier un changement d'état)
export const MatchMaking = (payload) => {
  const {matchmakingId, request} = payload;
  return { type: "MATCHMAKING", payload: { matchmakingId, request} };
};
