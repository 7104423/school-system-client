import React from "react";
import { Sidebar } from "../components/sidebar";

var currentView = "overview";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "overview",
    };
    this.setView = this.setView.bind(this);
  }

  setView(view) {
    this.setState({ view: view });
    currentView = view;
  }

  render() {
    switch (this.state.view) {
      case "overview":
        return (
          <div id="dashboard">
            <Sidebar setView={this.setView} />
            <Overview />
          </div>
        );
      case "schedule":
        return (
          <div id="dashboard">
            <Sidebar setView={this.setView} />
            <ScheduleView />
          </div>
        );
      case "performance":
        return (
          <div id="dashboard">
            <Sidebar setView={this.setView} />
            <PerformanceView />
          </div>
        );
      case "administrator":
        return (
          <div id="dashboard">
            <Sidebar setView={this.setView} />
            <AdministratorView />
          </div>
        );
    }
  }
}
class Overview extends React.Component {
  render() {
    return (
      <div class="dash-view">
        <h2 class="view-heading">Here's your breakdown.</h2>
        <DashboardCard />
      </div>
    );
  }
}

class ScheduleView extends React.Component {
  render() {
    return (
      <div class="dash-view">
        <h2 class="view-heading">Check your schedule.</h2>
        <DashboardCard />
      </div>
    );
  }
}

class PerformanceView extends React.Component {
  render() {
    return (
      <div class="dash-view">
        <h2 class="view-heading">Track your performance.</h2>
        <DashboardCard />
      </div>
    );
  }
}

class AdministratorView extends React.Component {
  render() {
    return (
      <div class="dash-view">
        <h2 class="view-heading">Manage your employees.</h2>
        <DashboardCard />
      </div>
    );
  }
}

class DashboardCard extends React.Component {
  render() {
    switch (currentView) {
      case "overview":
        return (
          <div class="dash-card">
            <OverviewCardContent />
          </div>
        );
      case "schedule":
        return (
          <div class="dash-card">
            <ScheduleCardContent />
          </div>
        );
      case "performance":
        return (
          <div class="dash-card">
            <PerformanceCardContent />
          </div>
        );
      case "administrator":
        return (
          <div class="dash-card">
            <AdministratorCardContent />
          </div>
        );
    }
  }
}

const OverviewCardContent = () => (
  <div>
    <h4 class="card-heading">Your Weekly Outlook</h4>
    <p class="card-subtitle">You are on track to hit your target this week.</p>
    <div id="stats-container">
      <div>
        <h5 class="lg-nmbr">13</h5>
        <p>Sales this week.</p>
      </div>
      <div>
        <h5 class="lg-nmbr">87%</h5>
        <p>Of your targets hit.</p>
      </div>
      <div>
        <h5 class="lg-nmbr">5</h5>
        <p>Sales this week.</p>
      </div>
      <div>
        <h5 class="lg-nmbr">45</h5>
        <p>Sales this week.</p>
      </div>
    </div>
  </div>
);

const ScheduleCardContent = () => (
  <div>
    <h4 class="card-heading">Your Roster</h4>
    <p class="card-subtitle">Your work schedule for this week.</p>
    <div class="table-container">
      <table>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <td>9AM to 5PM</td>
          <td>9AM to 5PM</td>
          <td>9AM to 5PM</td>
          <td>9AM to 5PM</td>
          <td>9AM to 5PM</td>
          <td>N/A</td>
          <td>N/A</td>
        </tr>
      </table>
    </div>
  </div>
);

const PerformanceCardContent = () => (
  <div>
    <h4 class="card-heading">Your Performance</h4>
    <p class="card-subtitle">You need to focus on conversion.</p>
  </div>
);

const AdministratorCardContent = () => (
  <div>
    <h4 class="card-heading">Your Employees</h4>
    <p class="card-subtitle">Edit and manage their roster and targets.</p>
  </div>
);
