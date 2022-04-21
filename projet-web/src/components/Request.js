import React from "react";

import '../styles/HomeConnect.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import { useSelector } from "react-redux";
import { store } from "../redux/store";

function Request() {

  const utilisateur = store.getState();
  const reduxAllParticipants = useSelector(state => state.AllMatch)  // appelle d'action
  console.log(reduxAllParticipants)
  const listParticipants = (reduxAllParticipants.payload).map((d) => 
  <li key={d.matchmakingId} onClick={() => {
    
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
    const url = "http://localhost:3001/matchmaking/request?matchmakingId=" + d.matchmakingId;
    console.log(url);
       fetch(url, requestOptions)
      .then((response) => response)
      .then((data) => {
        console.log(data);
        console.log("match request sent to " + d.name + " please wait for his confirmation");
        }
      )
      .catch((error) => console.error(error));
}
} > {d.name} </li>);


  return (
  
      <ul>
        {listParticipants}
      </ul>

      /* <div className="homeConnect"></div>
      <div id="profil" className="col-2">

          <img className=" rounded float-left  " src={require("../medias/iconeinvocateur.png")} alt="Profil picture" />
        <h2 className="">{reduxUser.name}</h2>
        <Link to="/deconnexion" className="btn btn-dark" >
          Se déconnecter
        </Link>

      </div>
      <div className="centre" >
        <button id="btnmatch" className="btn" type="submit" onClick={lancerMatchmaking}>
          Trouvez un match
        </button>
      </div> */






  );
}

export default Request;