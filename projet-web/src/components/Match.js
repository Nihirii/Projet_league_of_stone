import React from "react"; //, { useState, useEffect }
//import { Form} from "react-final-form";
import { store } from "../redux/store";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"; //, useSelector
import { ALLMATCHMAKING, MatchMaking } from "../redux/actions";

function Match() {
  const navigate = useNavigate();
  //const [myRequest, setMyRequest] = useState([])
  const utilisateur = store.getState();

  const dispatch = useDispatch(); // dispatch les donné
  const setMatchM = (data) => dispatch(MatchMaking(data));
  const setAllMatch = (data) => dispatch(ALLMATCHMAKING(data));

  //const [error, setError] = useState(null);

 
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
    fetch("http://localhost:3001/match/getAllMatch", requestOptions)
      .then((response) => response.json())
      .then((data) => {
    
        // Faut filtrer la liste et selectionner uniquement le match qui concerne cette utilisateur
        console.log(data)
      })
      
        //setMatchCourant(????); // sauvegarde des données sur le match qui conserne cette utilisateur
      .catch((error) => console.error(error));

    //}, [] )
  
  return (

    <>
      <h1>MATCH</h1>

    </>

  );
}

export default Match;
