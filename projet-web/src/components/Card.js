import React from 'react';
import '../styles/Choix.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'



class Card extends React.Component {

    constructor(props){
        super(props)
        

    }
    

    
    render() {

        const img = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.champion.key}_0.jpg`;


        return (
            
            
            <div className=" col-4 container"   >

                <div className="col-12 card" id="carte" onClick={() => this.props.onClick(this.props.champion)} >
                    <div >
                        <div className="row">
                        <img src={img} className=" col-12" alt={this.props.champion.name} />
                        </div>
                        <div className="card-img-overlay row" id="contenucard">
                            
                            <p className="card-text col"> armure: {this.props.champion.info.defense}</p>
                            <p className="card-text col-6">{this.props.champion.name} </p>
                            <p className="card-text col"> attaque: {this.props.champion.info.attack}</p>

                            

                        </div>
                        
                    </div>
                

                    
                </div>
            </div>

          
        )
    }

}
export default Card;