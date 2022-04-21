import React, { useState, useEffect } from "react";
import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux"; //, useSelector
import { useNavigate } from "react-router";
import { MatchMaking } from "../redux/actions";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Matchmaking() {
  const utilisateur = store.getState();
  const dispatch = useDispatch(); // dispatch les donnée
  const setMatchM = (data) => dispatch(MatchMaking(data));
  const matchMa = useSelector((state) => state.matchM);
  const [listeParticipants, setListeParticipants] = useState([]);
  const [listeRequetes, setListeRequetes] = useState([]);
  const [requestSend, setRequestSend] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(async () => {
      participer();
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

    fetch("http://localhost:3001/matchmaking/participate", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const matchM = {
          matchmakingId: data.matchmakingId,
          request: data.request,
        };

        console.log("dans participer");

        const req = [];
        data.request.forEach((elt) => {
          req.push(
            <li
              onClick={() => {
                acceptRequest(elt.matchmakingId);
              }}
            >
              {elt.name}
            </li>
          );
        });
        console.log(data);
        setMatchM(matchM);
        setListeRequetes(req);
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
        const part = [];
        data.forEach((elt) => {
          part.push(
            <li
              key={elt.name}
              onClick={() => {
                sendRequest(elt.matchmakingId);
              }}
            >
              {elt.name}
            </li>
          );
        });
        setListeParticipants(part);
        console.log("dans participants");
      })
      .catch((error) => console.error(error));
  }

  function sendRequest(idMatch) {
    setRequestSend(false);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www-authenticate", utilisateur.user.token);
    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(
      "http://localhost:3001/matchmaking/request?matchmakingId=" + idMatch,
      requestOptions
    )
      .then((response) => {
        console.log("dans sendRequest");
        setRequestSend(true);
      })
      .catch((error) => console.error(error));
  }

  function acceptRequest(idMatch) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www-authenticate", utilisateur.user.token);
    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(
      "http://localhost:3001/matchmaking/acceptRequest?matchmakingId=" +
        idMatch,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/match");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>User: {utilisateur.user.name}</h1>
      {requestSend && (
        <div className="alert alert-success" role="alert">
          Requête envoyée !
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
      )}
      <h1>Liste des joueurs cherchant un match:</h1>
      <ul>{listeParticipants}</ul>
      <h1>Liste des joueurs qui vous demandent un match:</h1>
      <p className="demandes">{listeRequetes}</p>
    </div>
  );
}

export default Matchmaking;
