import React from "react";
import { Link } from "react-router-dom";//, Navigate
import '../styles/HomeConnect.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function HomeConnect() {

  const navigate = useNavigate();

  function lancerMatchmaking() {

    navigate("/participation")

  }

  const reduxUser = useSelector(state => state.user)  // appelle d'action

  return (
    <div>
      <div className="homeConnect"></div>
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
      </div>
    </div>





  );
}

export default HomeConnect;
