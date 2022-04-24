import React from 'react';
import Card from './Card';
import '../styles/Choix.css';

//composant pour les cartes du jeu sélectionnées
class Deck extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {

    return (

      <section id="deck" className="col" >
 
        <div className="row">

          {this.props.carte.map((entry, _) => {

            return <Card key={entry.id} champion={entry} onClick={this.props.retirerChamp} />

          })
          }
        </div>
  
      </section>
    );
  }
}

export default Deck;