import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { LogOutAction } from "../redux/actions";
import { useEffect } from "react";

//Déconnecte un utilisateur et le renvoie vers la page de début.
function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(LogOutAction());
    navigate("/");
  });
}

export default Logout;
