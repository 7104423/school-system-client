import { useUser } from "../contexts/userContext";

export const withRole = (roles, Component) => (props) => {
  const user = useUser();
  const userRoles = user.getRoles();
  const hasRole = roles.some((role) => userRoles.includes(role));
  if (!hasRole) {
    user.logout();
    window.location.href = "/app/subjects";
    return null;
  }
  return <Component {...props} />;
};
