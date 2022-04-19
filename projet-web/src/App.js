import Inscription from "./components/Inscription"
import Connexion from "./components/Connexion"
import './styles/App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import React from "react"

class App extends React.Component{

  render(){

    return (
      <div>
        <Router>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/connexion" className ="nav-link">Se connecter</Link>
                </li>
                <li class="nav-item active">
                  <Link to="/inscription" className ="nav-link">Créer un compte</Link>
                </li>

              </ul>

            </div>
          </nav>

            <Routes>

              <Route path="/connexion" element = {<Connexion/>}/>

              <Route path="/inscription" element = {<Inscription/>}/>

            </Routes>


        </Router>
      </div>

    );
}
}

export default App;
