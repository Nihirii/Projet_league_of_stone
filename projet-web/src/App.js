import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import Logout from "./components/Logout";
import Home from "./components/Home";
import HomeConnect from "./components/HomeConnect";
import Matchmaking from "./components/Matchmaking"
import Match from "./components/Match"
import Choix from "./components/Choix";
import EndMatch from "./components/EndMatch"
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/connexion" element={<Connexion />} />

          <Route path="/inscription" element={<Inscription />} />

          <Route path="/accueil" element={<HomeConnect />} />

          <Route path="/deconnexion" element={<Logout />} />
          
          <Route path="/participation" element={<Matchmaking />} />

          <Route path="/match" element={<Match />} />

          <Route path="/choix" element={<Choix />} />

          <Route path="/finMatch" element={<EndMatch />} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
