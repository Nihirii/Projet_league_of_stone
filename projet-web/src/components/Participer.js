import React from "react";//, { useState, useEffect }
import { Form} from "react-final-form";
import { store } from "../redux/store";
//import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { MatchMaking } from "../redux/actions";
import { LogInAction } from "../redux/actions";



function Participer() {

    //const [myRequest, setMyRequest] = useState([])
    const utilisateur = store.getState()

    const dispatch = useDispatch(); // dispatch les donné
    const setMatchM = (data) => dispatch(LogInAction(data));

    

    function onSubmit(value) {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json", "www-authenticate ":  utilisateur.user.token},
        
        }
        console.log(utilisateur.user.token)

        // useEffect(() => {
        //         setMyRequest(myRequest)

        // },)

        fetch("http://localhost:3001/matchmaking/participate", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            const matchM = {
                matchmakingId: data.matchmakingId,
                request: data.request,

            }

         

            console.log(matchM)
            
            setMatchM(matchM) // recup donnéers de user et renvoi vers le redux

        })
        .catch((error) => console.error(error))

        
    }

    return (
        <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <div className="div" onSubmit={handleSubmit}>
            <h2>participer</h2>
              <button className="btn btn-primary" type="submit">
              Valider
            </button>
          </div>
        )}
      />
    )
    

    

}

export default Participer;