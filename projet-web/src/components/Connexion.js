import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; //, Navigate
import { useNavigate } from "react-router";
import { LogInAction } from "../redux/actions";


function Connexion() {
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // dispatch les données
  const setUser = (data) => dispatch(LogInAction(data));

  function onSubmit(values) {
    setWrong(false);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.pseudo + "@l3.fr",
        password: values.mdp,
      }),
    };

    fetch("http://localhost:3001/login", requestOptions).then((response) => {
      if (response.status === 500) {
        setWrong(true);
      } else {
        response
          .json()
          .then((data) => {
            const user = {
              id: data.id,
              email: data.email,
              name: data.name,
              token: data.token,
            };

            setUser(user); // recup données de user et renvoi vers le redux


            navigate("/accueil");
          })
          .catch((err) => console.error(err)); 
      }
    });
  }


  return (
    <div>
      <div className="Logoconnec">
        <Link to="/">
          <img src={require("../medias/logoLOS.png")} alt="LogoLOS" />
        </Link>
      </div>
      <div className="connexion"></div>

      <div className="inscription">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className="form" onSubmit={handleSubmit}>
              <h2>Connexion</h2>

              <div className="form-group">
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
              </div>

              <button className="btn btn-primary" type="submit">
                Valider
              </button>
            </form>
          )}
        />

        {wrong && (
          <div className="alert alert-danger" role="alert">
            Mot de passe ou identifiant incorrect !
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
      </div>
    </div>
  );
}

export default Connexion;
