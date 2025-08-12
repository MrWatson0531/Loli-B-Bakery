import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../utils/contexts/UserContext"

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(UserContext);
  // if the user is not logged in we want to navigate the user back to the home page
  // if the user IS logged in, we will display the children
  return !isLoggedIn ? <Navigate to="/" /> : children;
}
