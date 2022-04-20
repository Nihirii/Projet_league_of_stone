import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LogInAction } from "../redux/actions";

//import '../../node_modules/bootstrap/dist/css/bootstrap.css

function Connexion() {
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // dispatch les donné
  const setUser = (data) => dispatch(LogInAction(data));
  const reduxUser = useSelector(state => state.user)  // appelle d'action 


  function onSubmit(values) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.pseudo + "@l3.fr",
        password: values.mdp,
      }),
    };

    fetch("http://localhost:3001/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const user = {
          id: data.id,
          email: data.email,
          name: data.name,
          token: data.token,
        };

        setUser(user);  // recup donnéers de user et renvoi vers le redux

        navigate("/accueil");
      })
      .catch((err) => console.error(err)); //SI status= 500 -> existe déja

    //redirection
  }

  return (
    <div>
      {wrong && (
        <div className="alert alert-danger" role="alert">
          Mot de passe ou identifiant incorrect !
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
    </div>
  );
}

export default Connexion;
