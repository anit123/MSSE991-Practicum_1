import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import { baseURl } from "../../constants/apiContact";

function Home() {
  const [data, setData] = React.useState({ booking: 0, flight: 0, users: 0 });
  React.useEffect(() => {
    axios
      .all([
        axios.get(`${baseURl}api/v1/flight-booking`),
        axios.get(`${baseURl}api/v1/flight`),
        axios.get(`${baseURl}api/v1/users`),
      ])
      .then((res) => {
        console.log(res);
        setData({
          booking: res[0].data.results,
          flight: res[1].data.results,
          users: res[2].data.results,
        });
        // setBookingData(res.data.data.data);
      });
  }, []);
  return (
    <div>
      <HomeWrapper>
        <div className="card">
          <h1 className="text-capitalize text-center">
            Welcome to the Dashboard
          </h1>
          <div className="card-body">
            <Row>
              <Col md="4">
                Number of Booking:
                <br />
                {data.booking}
              </Col>
              <Col md="4">
                Number of Flight:
                <br />
                {data.flight}
              </Col>
              <Col md="4">
                Number of Users:
                <br />
                {data.users}
              </Col>
            </Row>
          </div>
        </div>
      </HomeWrapper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allData: state,
});

export default connect(mapStateToProps, {})(Home);
const HomeWrapper = styled.section`
  .card {
    padding: 40px 0;
  }
  .col-md-4 {
    text-align: center;
    margin-top: 100px;
  }
`;
