import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Home from "./layout/Home";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FlightDetails from "./layout/FlightDetails";
import AddLocation from "./layout/FlightDetails/AddLocation";
import BookingDetails from "./layout/FlightDetails/BookingDetails";

function App({ match }) {
  const [toggle, setToggle] = useState(true);
  function handleShowHide() {
    setToggle(!toggle);
  }
  return (
    <MainWrapper>
      <div
        className={
          toggle
            ? "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
            : "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar"
        }
      >
        <Navbar showHide={handleShowHide} />
        <div className="app-main">
          <Sidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <Route path={`${match.path}`} exact component={Home} />
                <Route
                  exact
                  path={`${match.path}/flight-details`}
                  component={FlightDetails}
                />
                <Route
                  exact
                  path={`${match.path}/add-location`}
                  component={AddLocation}
                />
                <Route
                  exact
                  path={`${match.path}/booking-details`}
                  component={BookingDetails}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  font-size: 16px;
  .app-main {
    padding-top: 70px !important;
  }
`;

export default withRouter(App);
