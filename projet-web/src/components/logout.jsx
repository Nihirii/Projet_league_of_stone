import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LogOutAction } from "../redux/actions";
import { useEffect } from "react";


const Logout = () => {

  const dispatch = useDispatch(); // dispatch les donné
  dispatch(LogOutAction());
  const reduxUser = useSelector(state => state.user)  // appelle d'action 
  console.log(reduxUser)
  const navigate = useNavigate();

  useEffect(() => {
      navigate("/")

  }, )

  return(
    <h1>
      ok
    </h1>
  );
}

export default Logout