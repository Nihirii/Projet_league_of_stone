import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import Logout from "./components/Logout";
import Home from "./components/Home";
import HomeConnect from "./components/HomeConnect";
import Participer from "./components/Participer"
import Request from "./components/Request"
import Match from "./components/Match"
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
          
          <Route path="/participation" element={<Participer />} />

          <Route path="/request" element={<Request />} />

          <Route path="/match" element={<Match />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
