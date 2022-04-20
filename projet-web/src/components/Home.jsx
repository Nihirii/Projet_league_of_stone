import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/connexion" className="nav-link">
                Se connecter
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/inscription" className="nav-link">
                Créer un compte
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Pas connecté</h1>;
    </div>
  );
}
export default Home;
