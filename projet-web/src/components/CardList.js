import React from 'react';
import Card from './Card';
import '../styles/Choix.css';

class CardList extends React.Component {
  constructor(props){
    super(props)



}


  render() {




    return (

      <div className="col " >
        <div className="row">

          {this.props.carte.map((entry, _) => {

            return <Card key={entry.id} champion={entry} onClick={this.props.ajouterChamp} />

          })}

        </div>

      </div>



    );
  }
}

export default CardList;