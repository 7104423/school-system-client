import { useNavigate, useParams } from "react-router-dom";
import { useApp } from "../contexts/appContext";
import { useUser } from "../contexts/userContext";

export const withRole =
  (roles = [], Component) =>
  (props) => {
    const user = useUser();
    const { id } = useParams();
    const { setError } = useApp();
    const navigate = useNavigate();

    if (roles.includes("$CURRENT_USER") && user.getUser()?.id === id) {
      return <Component {...props} />;
    }

    const userRoles = user.getRoles();
    const hasRole = roles.some((role) => userRoles.includes(role));
    if (!hasRole) {
      navigate("/app");
      setError("You don't have access for this page");
      return null;
    }
    return <Component {...props} />;
  };
