import { useParams } from "react-router-dom";
import { useUser } from "../contexts/userContext";

export const withRole =
  (roles = [], Component) =>
  (props) => {
    const user = useUser();
    const { id } = useParams();

    if (roles.includes("$CURRENT_USER") && user.getUser()?.id === id) {
      return <Component {...props} />;
    }

    const userRoles = user.getRoles();
    const hasRole = roles.some((role) => userRoles.includes(role));
    if (!hasRole) {
      user.logout();
      window.location.href = "/app/subjects";
      return null;
    }
    return <Component {...props} />;
  };
