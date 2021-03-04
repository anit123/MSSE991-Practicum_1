import React, { Component } from "react";
import styled from "styled-components";

class Stepprocess extends Component {
  render() {
    return (
      <Stepstylewrapper>
        <div>
          <ul class="progressbar">
            <li class="active">Search</li>
            <li>Select Flight</li>
            <li>Passanger Details</li>
            <li>Payment Mode</li>
            <li>Confirmation</li>
          </ul>
        </div>
      </Stepstylewrapper>
    );
  }
}

export default Stepprocess;

const Stepstylewrapper = styled.div`
  .container {
    width: 600px;
    margin: 100px auto;
  }
  .progressbar {
    counter-reset: step;
    margin-left: 12%;
  }
  .progressbar li {
    list-style-type: none;
    width: 15%;
    float: left;
    font-size: 12px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    color: #7d7d7d;
  }
  .progressbar li:before {
    width: 30px;
    height: 30px;
    content: counter(step);
    counter-increment: step;
    line-height: 30px;
    border: 2px solid #7d7d7d;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: white;
  }
  .progressbar li:after {
    width: 100%;
    height: 2px;
    content: "";
    position: absolute;
    background-color: #7d7d7d;
    top: 15px;
    left: -50%;
    z-index: -1;
  }
  .progressbar li:first-child:after {
    content: none;
  }
  .progressbar li.active {
    color: green;
  }
  .progressbar li.active:before {
    border-color: #55b776;
  }
  .progressbar li.active + li:after {
    background-color: #55b776;
  }
`;
