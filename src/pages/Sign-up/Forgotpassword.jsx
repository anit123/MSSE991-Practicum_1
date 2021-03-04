import React, { Component } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/all";

export class Forgotpassword extends Component {
  render() {
    return (
      <ForgotpasswordWrapper>
        <div className="card ">
          <div className="card-body">
            <h5>Forgot Password ?</h5>
            <span>
              No worries! just enter your email we will send you a reset
              password link
            </span>
            <form>
              <div class="form-row">
                <div className="col-md-10">
                  <div class="form-group ">
                    <label htmlFor="from">
                      <h5 className="email-label">Email</h5>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button type="submit" class="btn btn-primary">
                  Send Recovery Email
                  <BsArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </ForgotpasswordWrapper>
    );
  }
}

const ForgotpasswordWrapper = styled.div`
  /* margin-top:150px; */
  border: none !important;
  button {
    background-color: #2632be !important;
    padding: 10px 70px;
    border-radius: 10px;
    box-sizing: border-box;
    svg {
      font-size: 25px;
      margin-left: 10px;
    }
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 35%;
    margin: auto;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );

  h5 {
    margin-left: 18%;
    font-weight: 600;
    padding: 37px;
    color: #2632be;
    padding: 10px;
  }
  .email-label {
    display: flex;
    float: right;
  }
  /* background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%), url("images/banner-image.jpg"); */
  height: 85vh;
  background-size: cover;
  padding-top: 10%;
`;

export default Forgotpassword;
