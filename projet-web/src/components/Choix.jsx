import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardList from "./CardList";
import Deck from "./Deck";

import { useNavigate } from "react-router";
import "../styles/Choix.css";

const Choix = () => {
  const reduxUser = useSelector((state) => state.user);
  const [choisi, setchoisi] = useState([]);
  const [nonchoisi, setnonchoisi] = useState([]);
  const [valider, setvalider] = useState(false);

  const navigate = useNavigate();

  //vérifie que l'utilisateur est connecté
  if (reduxUser.id == "") {
    navigate("/");
  }

  //Récupère les données des cartes
  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((response) => {
        setnonchoisi(response);
      })
      .catch((err) => console.error(err));
  }, []);


  //Place le champion dans le deck de l'utilisateur(si moins de 20 cartes dedans)
  const ajouterChamp = (champion) => {
    if (choisi.length < 20) {
      const nonChoisi = nonchoisi.filter((value) => value.id !== champion.id);
      const Choisi = [...choisi, champion]; 

      setnonchoisi(nonChoisi);
      setchoisi(Choisi);
    } else {
      setvalider(true);
    }
  };

  //retire le champion du deck
  const retirerChamp = (champion) => {
    const Choisi = choisi.filter((value) => value.id !== champion.id);
    const nonChoisi = [...nonchoisi, champion];

    setnonchoisi(nonChoisi);
    setchoisi(Choisi);
  };

  //Lorsqu'on clique sur le bouton valider, envoie les données du deck au serveur, puis redirige vers le match
  const sendDeck = () => {
    let deck = [];

    choisi.forEach((elt) => {
      deck.push({ key: elt.name });
    });
    console.log(deck);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www.authenticate", reduxUser.token);
    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    const url = "http://localhost:3001/match/initDeck?deck=" + deck;
    fetch(url, requestOptions)
      .then((response) => {
        response.json();
        navigate("/match");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="row" id="choix">
      <div className="ValideDeck">
        <button
          className="btn btn-dark"
          type="submit"
          disabled={!valider}
          onClick={() => {
            sendDeck();
          }}
        >
          Validé deck
        </button>
      </div>

      <CardList carte={nonchoisi} ajouterChamp={ajouterChamp} />
      <Deck carte={choisi} retirerChamp={retirerChamp} />
    </div>
  );
};
export default Choix;
