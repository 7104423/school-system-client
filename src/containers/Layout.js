import { Sidebar } from "../components/sidebar";

export const Layout = ({ children, active }) => {
  return (
    <div id="dashboard">
      <Sidebar active={active} />
      <div className="dash-view">{children}</div>
    </div>
  );
};
