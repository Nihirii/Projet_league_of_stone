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

  if (reduxUser.id == "") {
    navigate("/");
  }

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((response) => {
        setnonchoisi(response);
      })
      .catch((err) => console.error(err));
  }, []);

  const ajouterChamp = (champion) => {
    if (choisi.length < 20) {
      const nonChoisi = nonchoisi.filter((value) => value.id !== champion.id);
      const Choisi = [...choisi, champion]; //si pas 20

      setnonchoisi(nonChoisi);
      setchoisi(Choisi);
    } else {
      setvalider(true);
    }
  };

  const retirerChamp = (champion) => {
    const Choisi = choisi.filter((value) => value.id !== champion.id);
    const nonChoisi = [...nonchoisi, champion]; //si pas 20

    setnonchoisi(nonChoisi);
    setchoisi(Choisi);
  };

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
