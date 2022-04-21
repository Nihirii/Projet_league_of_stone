import React from 'react';
import CardList from './CardList';
import Deck from './Deck';

class Choix extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            choisi: [],
            nonchoisi: [],

        }
        this.ajouterChamp = this.ajouterChamp.bind(this)
        this.retirerChamp = this.retirerChamp.bind(this)
    }

    componentDidMount() {

        fetch("http://localhost:3001/cards")
            .then(response => response.json())
            .then(response => {

                this.setState({

                    nonchoisi: response,


                })

            })
            .catch(err => console.error(err));


    }


    ajouterChamp(champion) {
        if((this.state.choisi).length < 20){
            console.log("prout");
            const nonChoisi = this.state.nonchoisi.filter(value => value.id !== champion.id)
            const choisi = [...this.state.choisi, champion] //si pas 20

            this.setState({

                nonchoisi: nonChoisi,
                choisi: choisi

            })
        }else {
            console.log("svp");
        }

    }


    retirerChamp(champion) {

        const choisi = this.state.choisi.filter(value => value.id !== champion.id)
        const nonChoisi = [...this.state.nonchoisi, champion] //si pas 20

        this.setState({

            nonchoisi: nonChoisi,
            choisi: choisi

        })

    }



    render() {



        return (

            <div className="row">

                

                <CardList carte={this.state.nonchoisi} ajouterChamp={this.ajouterChamp} />
                <Deck carte={this.state.choisi} retirerChamp={this.retirerChamp}  />

            </div>

        );
    }
}

export default Choix;