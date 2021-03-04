import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURl } from "../../../constants/apiContact";
import moment from "moment";
import styled from "styled-components";

const BookingFlightInfo = () => {
  const { bookingId } = useParams();
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    getbookingInfo();
  }, []);

  const getbookingInfo = () => {
    axios.get(`${baseURl}api/v1/flight/${bookingId}`).then((res) => {
      console.log(res);
      setResponseData(res.data.data.data);
    });
  };

  return (
    <BookingWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <strong>Departure From</strong>
            <p>{responseData?.from}</p>
          </div>
          <div className="col-md-4">
            <strong>Departure To</strong>
            <p>{responseData?.to}</p>
          </div>
          <div className="col-md-4">
            <p>
              {" "}
              <strong>Departure Date</strong> :
              {moment(responseData?.startDate).format("MMM Do YY")}
            </p>
            <p>
              {" "}
              <strong>Return Date</strong> :
              {moment(responseData?.endDate).format("MMM Do YY")}
            </p>
          </div>
        </div>
      </div>
    </BookingWrapper>
  );
};

export default BookingFlightInfo;

const BookingWrapper = styled.div`
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 30px 0;
  color: #fff;
`;
