import React from "react";
import {Link } from "react-router-dom";

function HomeConnect() {
  return (
    <div>
      <ul>
        <li class="nav-item active">
          <Link to="/deconnexion" className="nav-link">
            Se déconnecter
          </Link>
        </li>
      </ul>

      <h1>Connecté</h1>
    </div>

    
    
    

  );
}

export default HomeConnect;
