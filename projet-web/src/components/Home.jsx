import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';


//Page de départ du jeu, permet de se connecter ou de créer un compte.
function Home() {
  return (
    <div>
      <div className="home"></div>
      <div className="BoutonHome">
        <div className="logoLOS">
          <img src={require("../medias/logoLOS.png")} alt="LogoLOS"/>
        </div>
        <div className="links">
          <Link id="btnhome" className="btn btn-lg" to="/inscription">Crée un compte</Link>
          <Link id="btnhome" className="btn btn-lg" to="/connexion">Se connecter</Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
