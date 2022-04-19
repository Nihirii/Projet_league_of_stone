import React from "react"
import {Form, Field} from "react-final-form"
import { BrowserRouter as Router, Switch, Route, Navigate
  ,} from "react-router-dom";
//import '../../node_modules/bootstrap/dist/css/bootstrap.css
import Accueil from "./Accueil"


export default class Connexion extends React.Component {

  

  constructor(props) {
    super(props);

    this.state = {wrong: false}

  }
  



  onSubmit(values) {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.pseudo + "@l3.fr",
        password: values.mdp,
      })
      
    }


    fetch("http://localhost:3001/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {

        const user = {
          id : data.id,
          email : data.email,
          name : data.name,
          token : data.token,
        }

      }
      )
      .catch((err) => console.error(err));  //SI code = 409 -> existe déja
    
      //redirection
    
  }

  render() {
    return (
      <div>
        {this.state.wrong && (
          <div className="alert alert-danger" role="alert">
            Mot de passe ou identifiant incorrect !
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
          
        <Form
          onSubmit={this.onSubmit}
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
  
}