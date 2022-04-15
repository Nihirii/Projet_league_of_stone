
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import '../../../tools/node_modules/bootstrap/dist/css/bootstrap.css'
import Inscription from './Incription';
import Connexion from './Connexion';



function Accueil() {

  return (

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

  );
}

export default Accueil;
