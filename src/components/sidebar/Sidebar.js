import React from "react";
var username = "John Smith";
var usertitle = "ConnectHub/Employee";

export class Sidebar extends React.Component {
  setView(view) {
    this.props.setView(view);
    console.log("level 2 " + view);
  }
  render() {
    return (
      <div class="sidebar-menu">
        <UserProfileView username={username} usertitle={usertitle} />
        <SidebarMenu
          item1={"Overview"}
          item2={"Schedule"}
          item3={"Performance"}
          item4={"Administration"}
          setView={this.props.setView}
        />
        <div>
          <button id="sign-out-btn" class="full-btn">
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}

class UserProfileView extends React.Component {
  render() {
    return (
      <div class="user-profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2wn18dnC8OmX7Qx49epjgoHREUBHEviB10griBGemOmkYQoK5g"
          id="profile-pic"
          alt="profile pic"
        />
        <h3 id="display-name">{this.props.username}</h3>
        <p class="subtitle">{this.props.usertitle}</p>
      </div>
    );
  }
}

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: "active-item",
      schedule: "inactive-item",
      performance: "inactive-item",
      administrator: "inactive-item",
    };
    this.setBtnAndView = this.setBtnAndView.bind(this);
  }

  setBtnAndView(view) {
    this.props.setView(view);
    if (view === "overview") {
      this.setState({
        overview: "active-item",
        schedule: "inactive-item",
        performance: "inactive-item",
        administrator: "inactive-item",
      });
    } else if (view === "schedule") {
      this.setState({
        overview: "inactive-item",
        schedule: "active-item",
        performance: "inactive-item",
        administrator: "inactive-item",
      });
    } else if (view === "performance") {
      this.setState({
        overview: "inactive-item",
        schedule: "inactive-item",
        performance: "active-item",
        administrator: "inactive-item",
      });
    } else if (view === "administrator") {
      this.setState({
        overview: "inactive-item",
        schedule: "inactive-item",
        performance: "inactive-item",
        administrator: "active-item",
      });
    }
  }

  render() {
    return (
      <div class="menu-items">
        <a
          class={this.state.overview}
          href="#"
          onClick={() => this.setBtnAndView("overview")}
        >
          {this.props.item1}
        </a>
        <a
          class={this.state.schedule}
          href="#"
          onClick={() => this.setBtnAndView("schedule")}
        >
          {this.props.item2}
        </a>
        <a
          class={this.state.performance}
          href="#"
          onClick={() => this.setBtnAndView("performance")}
        >
          {this.props.item3}
        </a>
        <a
          class={this.state.administrator}
          href="#"
          onClick={() => this.setBtnAndView("administrator")}
        >
          {this.props.item4}
        </a>
      </div>
    );
  }
}
