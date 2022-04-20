import React from "react";
import {Link } from "react-router-dom";//, Navigate
import '../styles/HomeConnect.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";

function HomeConnect() {

  const navigate = useNavigate();

  function lancerMatchmaking() {

    navigate("/participation")

  }

  return (
    <>
      <div >
        
      <img className=" rounded float-left" src={require("../medias/iconeinvocateur.png")} alt="Profil picture"></img>
      
      <Link to="/deconnexion" className="btn btn-dark" >
        Se déconnecter
      </Link>
      <p>PIPOU</p>
      </div>


      <div className="centre" >
          <h2>League of Stone</h2>
          <button id="btnmatch" className="btn" type="submit" onClick={lancerMatchmaking}>
            Trouvez un match
          </button>
      </div>
    </>



    

  );
}

export default HomeConnect;
