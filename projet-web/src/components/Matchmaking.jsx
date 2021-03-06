import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //, useSelector
import { useNavigate } from "react-router";
import { MatchMaking } from "../redux/actions";
import "../styles/Matchmaking.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


//Page de recherche de match
function Matchmaking() {
  const dispatch = useDispatch();
  const setMatchM = (data) => dispatch(MatchMaking(data));
  const [listeParticipants, setListeParticipants] = useState([]);
  const [listeRequetes, setListeRequetes] = useState([]);
  const [requestSend, setRequestSend] = useState(false);
  const navigate = useNavigate();
  const utilisateur = useSelector((state) => state.user);


  //vérifie que l'utilisateur est connecté
  if (utilisateur.id === "") {
    navigate("/");
  }

  //Actualise les données toutes les trois secondes
  useEffect(() => {
    participer();
    participants();
    const timer = setInterval(async () => {
      participer();
      participants();
      // accepted();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  //Ajoute l'utilisateur dans la liste des personnes qui recherche un match
  //Récupère également les requetes envoyées à l'utlisateur
  function participer() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www-authenticate", utilisateur.token);
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
        if (data.match) {
          // si match existe, renvoie vers la sélection des champions
          navigate("/choix");
        }
      })
      .catch((error) => console.error(error));

    //Console log pour vérifier les match en cours
    fetch("http://localhost:3001/match/getAllMatch", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("match en cours:" + data);
      })

      .catch((error) => console.error(error));
  }

  //Permet d'afficher les joueurs en recherche de match
  function participants() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www-authenticate", utilisateur.token);
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
      })
      .catch((error) => console.error(error));
  }

  //Lorqu'on clique sur le pseudo d'un joueur de la liste, envoie d'une demande de match
  function sendRequest(idMatch) {
    setRequestSend(false);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www-authenticate", utilisateur.token);
    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(
      "http://localhost:3001/matchmaking/request?matchmakingId=" + idMatch,
      requestOptions
    )
      .then((response) => {
        setRequestSend(true);
      })
      .catch((error) => console.error(error));
  }

  //Permet d'accepter une requete d'un autre utilisateur. Renvoie vers la sélection des champions
  function acceptRequest(idMatch) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www-authenticate", utilisateur.token);
    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(
      "http://localhost:3001/matchmaking/acceptRequest?matchmakingId=" +
      idMatch,
      requestOptions
    )
      .then((response) => {
        console.log(response);
        navigate("/choix");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="matchmaking">
      <div>
        <h1 >Pseudo: {utilisateur.name}</h1>
      </div>

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
      <div className="list1 row">
        <div className="list2 col ">
          <h4>Liste des joueurs cherchant un match:</h4><br></br>
          <ul>
            <li>
              {listeParticipants}
            </li>
          </ul>
        </div><br></br>

        <div className="list2 col">
          <h4>Liste des joueurs qui vous demandent un match:</h4>
          <p className="demandes">{listeRequetes}</p>
        </div>
      </div>


    </div>
  );
}

export default Matchmaking;
