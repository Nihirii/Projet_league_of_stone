import React from 'react';
import '../styles/Choix.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

//Composant pour une carte
class Card extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        //Récupération de l'image du champion
        const img = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.champion.key}_0.jpg`;


        return (


            <div className="card "   >

                <div className=" " onClick={() => this.props.onClick(this.props.champion)} >
                    <div >
                        <div className="">
                            <img src={img} className="card-image " alt={this.props.champion.name} />
                        </div>
                        <div className="card-img-overlay " id="contenucard">

                            <p className="card-text "> arm: {this.props.champion.info.defense}</p>
                            <p className="card-title ">{this.props.champion.name} </p>
                            <p className="card-text "> atk: {this.props.champion.info.attack}</p>

                        </div>

                    </div>



                </div>
            </div>


        )
    }

}
export default Card;