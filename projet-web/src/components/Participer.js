import React from "react"; //, { useState, useEffect }
//import { Form} from "react-final-form";
import { store } from "../redux/store";
//import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"; //, useSelector
// import { useNavigate } from "react-router";
import { MatchMaking } from "../redux/actions";

function Participer() {
  //const [myRequest, setMyRequest] = useState([])
  const utilisateur = store.getState();

  const dispatch = useDispatch(); // dispatch les donné
  const setMatchM = (data) => dispatch(MatchMaking(data));

  //const [error, setError] = useState(null);

  function participant(value) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www-authenticate", utilisateur.user.token);
    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    console.log("token : " + utilisateur.user.token);

    // },)
    //useEffect( () => {    // ajouter update toutes les x secondes dans le useEffect
    fetch("http://localhost:3001/matchmaking/participate", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const matchM = {
          matchmakingId: data.matchmakingId,
          request: data.request,
        };

        console.log(matchM);

        setMatchM(matchM); // recup donnéers de user et renvoi vers le redux
      })
      .catch((error) => console.error(error));
    //}, [] )
  }

  // function MyComponent() {
  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   const [items, setItems] = useState([]);

  //   // Note: the empty deps array [] means
  //   // this useEffect will run once
  //   // similar to componentDidMount()
  //   useEffect(() => {
  //     fetch("https://api.example.com/items")
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           setIsLoaded(true);
  //           setItems(result);
  //         },
  //         // Note: it's important to handle errors here
  //         // instead of a catch() block so that we don't swallow
  //         // exceptions from actual bugs in components.
  //         (error) => {
  //           setIsLoaded(true);
  //           setError(error);
  //         }
  //       )
  //   }, [])

  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return (
  //       <ul>
  //         {items.map(item => (
  //           <li key={item.id}>
  //             {item.name} {item.price}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  return (
    <button className="btn btn-primary" onClick={participant}>
      Trouver un match
    </button>


  );
}

export default Participer;
