import { useUser } from "../contexts/userContext";

export const withRole = (roles, Component) => (props) => {
  const user = useUser();
  const userRoles = user.getRoles();
  const hasRole = roles.some((role) => userRoles.includes(role));
  console.log("called");
  if (!hasRole) {
    user.logout();
    window.location.href = "/app/login";
    return null;
  }
  return <Component />;
};
