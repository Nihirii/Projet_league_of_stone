import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import Logout from "./components/Logout";
import Home from "./components/Home";
import HomeConnect from "./components/HomeConnect";
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

        </Routes>
      </Router>
    </div>
  );
}

export default App;
