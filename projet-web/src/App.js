import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import Logout from "./components/Logout";
import Home from "./components/Home";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Accueil from "./components/Accueil";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const utilisateur = store.getState(); //récupére le state actuel (user)
  console.log(utilisateur);

  return (
    <div>
      <Provider store={store}>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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

                <li class="nav-item active">
                  <Link to="/deconnexion" className="nav-link">
                    Se déconnecter
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/connexion" element={<Connexion />} />

            <Route path="/inscription" element={<Inscription />} />

            <Route path="/accueil" element={<Accueil />} />

            <Route path="/deconnexion" element={<Logout />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
