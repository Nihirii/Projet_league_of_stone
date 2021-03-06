import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../styles/Connexion.css";

//Page d'inscription
function Inscription() {
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [errorPassword, seterrorPassword] = useState(false);
  const navigate = useNavigate();


  //Se déclenche lorsqu'on appuie sur le bouton validé
  //Vérification des données du formulaire
  //Récupère ce que l'utilisateur a inscrit et l'envoie vers le serveur

  function onSubmit(values) {
    setUserAlreadyExist(false);
    seterrorPassword(false);

    if (values.mdp !== values.confirmemdp) {
      seterrorPassword(true);
    } else {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.pseudo,
          email: values.pseudo + "@l3.fr",
          password: values.mdp,
          confPassword: values.confirmemdp,
        }),
      };

      fetch("http://localhost:3001/user", requestOptions)

        .then((response) => {
          if (response.status === 409) {
            setUserAlreadyExist(true);
          } else {
            response.json()

              .then((data) => {
                setUserCreated(true);
                navigate("/");
              })
              .catch((err) => console.error(err));
          }
        });
    }
  }
  return (
    <div>
      <div className="Logoconnec">
        <Link to="/" >
          <img className="logoLOS" src={require("../medias/logoLOS.png")} alt="LogoLOS" />
        </Link>

      </div>

      <div className="connexion">
        <div className="inscription">
          {!userCreated && (
            //Formulaire de connexion
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form className="form" onSubmit={handleSubmit}>
                  <h2>Inscription</h2>

                  <div className="form-group" id="form">
                    <label>Pseudo</label>
                    <Field
                      name="pseudo"
                      component="input"
                      placeholder="pseudo"
                      className="form-control"
                    />

                    <label>Mot de passe</label>
                    <Field
                      name="mdp"
                      component="input"
                      placeholder="Mot de passe"
                      className="form-control"
                      type="password"
                    />

                    <label>Confirmez votre mot de passe </label>
                    <Field
                      name="confirmemdp"
                      component="input"
                      placeholder="Mot de passe"
                      className="form-control"
                      type="password"
                    />
                  </div>

                  <button className="btn btn-dark" type="submit">
                    Valider
                  </button>
                </form>
              )}
            />
          )}

          {/* Message d'alerte si le pseudo est déja prit */}
          {userAlreadyExist && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              Ce pseudo existe déja !
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          {/* Message d'alerte de réussite*/}
          {userCreated && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              Inscription réussie!
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          {/* Message d'alerte lorsque les deux mots de passe ne correspondent pas */}
          {errorPassword && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              Le mot de passe ne correspond pas, réessayez !
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <div className="backConnect">
            <Link to="/deconnexion" className="btn btn-dark">
              revenir en arriere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
