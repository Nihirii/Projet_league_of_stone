import React from "react";

import '../styles/HomeConnect.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import { useSelector } from "react-redux";


function Request() {


  const reduxAllParticipants = useSelector(state => state.AllMatch)  // appelle d'action
  console.log(reduxAllParticipants)
  const listParticipants = (reduxAllParticipants.payload).map((d) => 
  <li key={d.matchmakingId} onClick={() => {
    console.log("choosed " + d.name + " for matching request")
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