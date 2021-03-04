import React, { Component } from "react";
import styled from "styled-components";
import Login from "../../Sign-up/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Home from "../Index";
import { connect } from "react-redux";
import { DropdownButton, Dropdown, NavDropdown } from "react-bootstrap";
// import { Dropdown } from "bootstrap";
import { logout, loadUser } from "../../../store/auth/AuthAction";

export class Navbar extends Component {
  getDropdownContent = () => {
    if (this.props.auth.user?.result?.role === "user") {
      return (
        <li class="nav-item">
          {/* <Link to="/login" class="nav-link" href="#">
                      {this.props.auth.user?.result?.name}
                    </Link> */}
          <NavDropdown
            // id="dropdown-basic-button"
            title={this.props.auth.user?.result?.name}
            className="btn p-0"
          >
            <Dropdown.Item href="#/action-1">Booking</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
            <Dropdown.Item>
              <span
                onClick={() => {
                  this.props.history.replace("/");
                  window.location.reload();
                  this.props.logout();
                  this.props.loadUser();
                }}
              >
                Logout
              </span>
            </Dropdown.Item>
          </NavDropdown>
        </li>
      );
    } else if (this.props.auth.user?.result?.role === "admin") {
      return (
        <li class="nav-item">
          <Link to="/dashboard" class="nav-link">
            Dashboard
          </Link>
        </li>
      );
    } else {
      return (
        <li class="nav-item">
          <Link to="/login" class="nav-link">
            Log in
          </Link>
        </li>
      );
    }
  };
  render() {
    console.log(this.props.auth);

    return (
      <Navwrapper>
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <Link to="/" class="navbar-brand">
              Flight Reservation
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link to="/" class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/ticketstatus" class="nav-link" href="#">
                    Ticket Status
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/flightinfo" class="nav-link" href="#">
                    Flight Info
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/webcheckin" class="nav-link" href="#">
                    Web Checkin
                  </Link>
                </li>
                {React.cloneElement(this.getDropdownContent())}
              </ul>
            </div>
          </nav>
        </div>
      </Navwrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, loadUser })(
  withRouter(Navbar)
);

const Navwrapper = styled.div`
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid rgb(255 255 255 / 50%);
  .navbar .nav-item .nav-link,
  .navbar-brand {
    color: white !important;
  }
  .navbar-brand {
    font-weight: 800;
    margin-right: 10px;
  }
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;
