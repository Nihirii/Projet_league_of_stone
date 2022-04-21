import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LogOutAction } from "../redux/actions";
import { useEffect } from "react";

const Logout = () => {

  const dispatch = useDispatch();
  dispatch(LogOutAction());
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/")
  }, )

}

export default Logout