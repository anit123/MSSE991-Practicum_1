import React, { Component } from "react";
import Banner from "./component/Banner";
import MostPopularDestination from "./component/MostPopularDestination";
import WeeklyDeals from "./component/WeeklyDeals";

export class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <WeeklyDeals />
        <MostPopularDestination/>
      </div>
    );
  }
}

export default Home;
