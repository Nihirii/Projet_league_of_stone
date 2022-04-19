import React from "react"
import {Form, Field} from "react-final-form"
// import '../../../tools/node_modules/bootstrap/dist/css/bootstrap.css'


export default class Connexion extends React.Component {

  constructor(props) {
    super(props);

    this.state = {wrong: false,};

  }

  onSubmit(values) {
    console.log("cc")
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
      </div>
    );
  }       
  
}