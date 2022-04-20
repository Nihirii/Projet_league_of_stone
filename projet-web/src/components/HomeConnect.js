import React from "react";
import {Link, Navigate } from "react-router-dom";
import '../styles/HomeConnect.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";

function HomeConnect() {

  const navigate = useNavigate();

  function lancerMatchmaking(){

    navigate("/participation")

  }

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


      <div class="centre">
        <button onClick={lancerMatchmaking}>Trouvez un match</button>
      </div>
    </body>



    

  );
}

export default HomeConnect;
