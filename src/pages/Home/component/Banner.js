import React, { Component } from "react";
import styled from "styled-components";
import Flightsearch from "./Flightsearch";
import Navbar from "./Navbar";

class Banner extends Component {
  render() {
    return (
      <BannerWraper>
        {/* <Navbar /> */}
        <div className="container">
          <div className="row search-com">
            <div className="col-md-6">
              <h2>Find Best Flights for the</h2>
              <h3>Amazing Places</h3>
            </div>
            <div className="col-md-6">
              <Flightsearch />
            </div>
          </div>
        </div>
      </BannerWraper>
    );
  }
}

export default Banner;

const BannerWraper = styled.section`
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  /* background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%), url("images/banner-image.jpg"); */
  height: 85vh;
  background-size: cover;

  .search-com {
    padding-top: 150px;
  }
  h2,
  h3 {
    color: #fff;
  }
  h2 {
    font-weight: normal;
    margin-top: 30px;
    font-size: 31px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: capitalize;
  }
  h3 {
    text-align: center;
    font-size: 50px;
    font-weight: 800;
    letter-spacing: 4px;
    text-transform: capitalize;
  }
`;
