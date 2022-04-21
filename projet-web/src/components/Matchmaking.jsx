import React, { useState, useEffect } from "react";
import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux"; //, useSelector
import { useNavigate } from "react-router";
import { MatchMaking } from "../redux/actions";

function Matchmaking() {
  const utilisateur = store.getState();
  const dispatch = useDispatch(); // dispatch les donnée
  const setMatchM = (data) => dispatch(MatchMaking(data));
  const matchM = useSelector((state) => state.matchM);
  const [listeParticipants, setListeParticipants] = useState([]);
  const [listeRequetes, setListeRequetes] = useState([]);

  useEffect(() => {
    participer();
    participants();
    const timer = setInterval(async () => {
      // Toutes les 3 sec, on actualise la liste des participants
      participants();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  function participer() {

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www-authenticate", utilisateur.user.token);
    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    console.log("token : " + utilisateur.user.token);

    // },)
    //useEffect( () => {    // ajouter update toutes les x secondes dans le useEffect
    fetch("http://localhost:3001/matchmaking/participate", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const matchM = {
          matchmakingId: data.matchmakingId,
          request: data.request,
        };

        console.log(matchM);

        setMatchM(matchM); 
      })
      .catch((error) => console.error(error));


  }
  function participants() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www-authenticate", utilisateur.user.token);
    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch("http://localhost:3001/matchmaking/getAll", requestOptions)
      .then((response) => response.json())
      .then((data) => {

        const participants = JSON.stringify(data)
        setListeParticipants(participants); 

      })
      .catch((error) => console.error(error));
  }


  function sendRequest(){


  }


  return (
    <div>
      <h1>User: {utilisateur.user.name}</h1>
      <h1>Liste des joueurs cherchant un match:</h1>
      <p className="participants">{listeParticipants}</p>
      <h1>Liste des joueurs qui vous demandent un match:</h1>
      <p className="demandes">{listeRequetes}</p>
    </div>
  );
}

export default Matchmaking;
