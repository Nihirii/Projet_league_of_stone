import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeConnect.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";


//Page d'accueil du jeu une fois connecté
function HomeConnect() {
  const navigate = useNavigate();
  const utilisateur = useSelector((state) => state.user);

  //vérifie que l'utilisateur est connecté
  if (utilisateur.id == "") {
    navigate("/");
  }

  //renvoie vers la page de matchmaking
  function lancerMatchmaking() {
    navigate("/participation");
  }

  const reduxUser = useSelector((state) => state.user); // appelle d'action

  return (
    <div>
      <div className="homeConnect"></div>
      <div id="profil" className="col-2">
        <img
          className=" rounded float-left  "
          src={require("../medias/iconeinvocateur.png")}
          alt="Profil picture"
        />
        <h2 className="">{reduxUser.name}</h2>
        <Link to="/deconnexion" className="btn btn-dark">
          Se déconnecter
        </Link>
      </div>
      <div className="centre">
        <button className="btn"
          id="btnmatch"
          type="submit"
          onClick={lancerMatchmaking}
        >
          <p id="nombtn">Trouvez un match</p>
        </button>
      </div>
    </div>
  );
}

export default HomeConnect;
