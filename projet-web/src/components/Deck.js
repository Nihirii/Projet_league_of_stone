import React from 'react';
import Card from './Card';
import '../styles/Choix.css';


class Deck extends React.Component {

  constructor(props) {
    super(props)



  }


  render() {


    return (

      <section id="deck" className="col-6" >
 
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