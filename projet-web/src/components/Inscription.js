import React, { useState } from "react";
import { Form, Field } from "react-final-form";
//import "../../../tools/node_modules/bootstrap/dist/css/bootstrap.css";

function Inscription() {

  const [userCreated, setuserCreated] = useState(false);
  const [errorPassword, seterrorPassword] = useState(false);


  function onSubmit(values) {
    if (values.mdp != values.confirmemdp) {
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
        .then((response) => response.json())
        .then((data) => {
          //if response.status == "409":
          //else:
          console.log(data); //AFFICHER COOL
          setuserCreated(true);
        })
        .catch((err) => console.error(err)); //SI response.status = 409 -> existe déja
    }
  }

  return (
    <div>
      {userCreated && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Inscription réussie !
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

      {!userCreated && (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className="form" onSubmit={handleSubmit}>
              <h2>Inscription</h2>

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

                <label>Confirmez votre mot de passe </label>
                <Field
                  name="confirmemdp"
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
      )}
    </div>
  );
}


export default Inscription;