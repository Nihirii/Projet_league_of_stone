import React from "react";
import {Link } from "react-router-dom";
import '../styles/HomeConnect.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function HomeConnect() {
  return (
    <body>
      <header>
        <ul>
          <li class="nav-item active">
            <Link to="/deconnexion" className="nav-link">
              Se déconnecter
            </Link>
          </li>
        </ul>

      </header>

      <h1>Connecté</h1>
      <div class="centre">
        <button>Trouvez un match</button>
      </div>
    </body>

    
    
    

  );
}

export default HomeConnect;
