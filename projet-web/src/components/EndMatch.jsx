import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { useEffect } from "react";

function EndMatch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxUser = useSelector((state) => state.user);

  function unparticipate() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("www.authenticate", reduxUser.token);
    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    const url = "http://localhost:3001/match/finishMatch";
    fetch(url, requestOptions)
      .then((response) => {
        response.json();
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    unparticipate();
    navigate("/accueil");
  });
}

export default EndMatch;
