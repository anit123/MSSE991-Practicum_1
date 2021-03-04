import React from "react";
import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Foooter = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h2 className="logo-title">Flight Reservation</h2>
            <p>Travel aware -staying safe and healthy aboard</p>
            <ul className="contact">
              <li>
                <FiPhone /> +737373773
              </li>
              <li className="mt-2">
                <AiOutlineMail /> flightregistration@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h6>Information</h6>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="mt-1">
                <Link to="/">Contact</Link>
              </li>
              <li className="mt-1">
                <Link to="/">Ticket</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h6>Follow Us </h6>
            <ul>
              <li>
                <Link to="/">
                  <GrFacebookOption /> <span>Facebook</span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider">
        &copy; Airline Reservation. All right reserved
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.section`
  margin-top: 80px;
  border-top: 1px solid #e7e7e7;
  padding-top: 30px;
  /* padding-button: 30px; */
  .logo-title {
    font-weight: 800;
    /* font-style: italic; */
    letter-spacing: 2px;
  }
  .contact {
    li {
      color: gray;
      font-size: 14px;
    }
  }
  p {
    color: gray;
  }
  h6 {
    font-weight: 700;
  }
  ul {
    padding: 0;
    a {
      color: gray;
      span {
        font-size: 14px;
      }
    }
    li {
      list-style: none;
    }
  }
  .divider {
    padding: 20px 0;
    border-top: 1px solid #e7e7e7;
    text-align: center;
    color: gray;
  }
`;
export default Foooter;
