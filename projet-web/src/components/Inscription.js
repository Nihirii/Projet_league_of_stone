import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../styles/Connexion.css";

function Inscription() {
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [errorPassword, seterrorPassword] = useState(false);
  const navigate = useNavigate();


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
        <Link to="/">
          <img src={require("../medias/logoLOS.png")} alt="LogoLOS" />
        </Link>
      </div>

      <div className="connexion">
        <div className="inscription">
          {!userCreated && (
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
        </div>
      </div>
    </div>
  );
}

export default Inscription;
