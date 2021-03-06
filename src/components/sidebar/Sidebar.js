import classNames from "classnames";
import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export const Sidebar = (props) => {
  const { active } = props;
  const user = useUser();
  const navigate = useNavigate();

  const handleSignOut = useCallback(() => {
    user.logout();
    navigate("/app/login");
  }, [user, navigate]);

  return (
    <div className="sidebar-menu">
      <UserProfileView />
      <div className="menu-items">
        <Link
          to="/app/subjects"
          className={classNames({
            "active-item": active === "subjects",
            "inactive-item": active !== "subjects",
          })}
        >
          Subjects
        </Link>
        <Link
          to="/app/topics"
          className={classNames({
            "active-item": active === "topics",
            "inactive-item": active !== "topics",
          })}
        >
          Topics
        </Link>
        <Link
          to="/app/digital-contents"
          className={classNames({
            "active-item": active === "digital-contents",
            "inactive-item": active !== "digital-contents",
          })}
        >
          Digital contents
        </Link>
        <Link
          to="/app/study-programmes"
          className={classNames({
            "active-item": active === "study-programmes",
            "inactive-item": active !== "study-programmes",
          })}
        >
          Study programmes
        </Link>
        <Link
          to="/app/users"
          className={classNames({
            "active-item": active === "users",
            "inactive-item": active !== "users",
          })}
        >
          Users
        </Link>
      </div>
      <div>
        <button onClick={handleSignOut} id="sign-out-btn" className="full-btn">
          Sign Out
        </button>
      </div>
    </div>
  );
};

const UserProfileView = () => {
  const user = useUser();
  const roles = user.getRoles();
  const fullName = useMemo(
    () => `${user.getUser()?.name ?? ""} ${user.getUser()?.surname ?? ""}`,
    [user]
  );

  return (
    <div className="user-profile">
      <Link to={`/app/user/edit/${user.getUser()?.id}`}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2wn18dnC8OmX7Qx49epjgoHREUBHEviB10griBGemOmkYQoK5g"
          id="profile-pic"
          alt="profile pic"
        />
      </Link>
      <h3 id="display-name">{fullName}</h3>
      <Typography variant="subtitle2">{roles.join(", ")}</Typography>
    </div>
  );
};
