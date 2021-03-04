import React, { Component } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/all";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { baseURl } from "../../../constants/apiContact";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const validationSchema = Yup.object().shape({
  isOnewayActive: Yup.boolean(),
  from: Yup.object().nullable().required("This is required fields!"),
  to: Yup.object().nullable().required("This is required fields!"),
  departure: Yup.date().required("this is required fiedls!"),
  return: Yup.date().when("isOnewayActive", {
    is: false,
    then: Yup.date().required("This is required fields!"),
  }),
});

export class Flightsearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      formData: {
        from: "",
        to: "",
        departure: "",
        return: "",
        isOnewayActive: true,
      },
      isOneWayActive: false,
    };
  }
  componentDidMount() {
    axios.get(`${baseURl}api/v1/location`).then((res) => {
      const mapDataForSelect = res.data.data.data.map((city) => {
        return { label: city.city, value: city._id };
      });
      this.setState({ cities: mapDataForSelect });
    });
  }
  handleToggleActive = (setFieldValue, values) => {
    setFieldValue("isOneWayActive", !values.isOneWayActive);
  };
  handleSearch = (values) => {
    let queryStr;
    if (!values.isOneWayActive) {
      queryStr = `/flightinfo?from=${values.from.label}&to=${values.to.label}&departure=${values.departure}&return=${values.return}`;
    } else {
      queryStr = `/flightinfo?from=${values.from.label}&to=${values.to.label}&departure=${values.departure}`;
    }
    this.props.history.push(queryStr);
  };
  render() {
    const { formData, isOneWayActive, cities } = this.state;
    return (
      <FlightSearWrapper>
        <div className="card ">
          <div className="card-body">
            <Formik
              initialValues={formData}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // console
                this.handleSearch(values);
              }}
            >
              {({
                values,

                handleBlur,
                handleChange,
                setFieldValue,
                setFieldTouched,
              }) => {
                return (
                  <Form>
                    <div id="outer">
                      <div class="inner  ">
                        <Link
                          onClick={() =>
                            this.handleToggleActive(setFieldValue, values)
                          }
                          to="#"
                          className={isOneWayActive ? "" : "active"}
                        >
                          Round Trip
                        </Link>
                        <span>/</span>
                      </div>
                      <div class="inner">
                        <Link
                          onClick={() =>
                            this.handleToggleActive(setFieldValue, values)
                          }
                          to="#"
                          className={isOneWayActive ? "active" : ""}
                        >
                          One Way
                        </Link>
                      </div>
                    </div>
                    <div class="form-row mt-3">
                      <div className="col-md-6">
                        <div class="form-group ">
                          <label htmlFor="from">From</label>
                          {/* <input
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="From"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="from"
                          /> */}
                          <Select
                            onChange={(city, val) => {
                              setFieldValue("from", city);
                            }}
                            onBlur={() => {
                              setFieldTouched("from");
                            }}
                            name="from"
                            options={cities}
                          />
                          <ErrorMessage
                            name="from"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group labelTo">
                          <label for="inputPassword4">To</label>
                          {/* <input
                            type="text"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="Destination"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="to"
                          /> */}
                          <Select
                            onChange={(city, val) => {
                              setFieldValue("to", city);
                            }}
                            onBlur={() => {
                              setFieldTouched("to");
                            }}
                            name="to"
                            options={cities}
                          />
                          <ErrorMessage
                            name="to"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group ">
                          <label htmlFor="from">Departure</label>
                          <input
                            type="date"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Departure"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="departure"
                          />
                          <ErrorMessage
                            name="departure"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      {!values.isOneWayActive && (
                        <div className="col-md-6">
                          <div class="form-group ">
                            <label for="inputPassword4">Return</label>
                            <input
                              type="date"
                              class="form-control"
                              id="inputPassword4"
                              placeholder="Return"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="return"
                              // max="2/20/2021"
                            />
                            <ErrorMessage
                              name="return"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-center mt-4">
                      <button
                        to={`/flightinfo`}
                        type="submit"
                        class="btn btn-primary myButton"
                      >
                        Search Now
                        <BsArrowRight />
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </FlightSearWrapper>
    );
  }
}

const FlightSearWrapper = styled.div`
  /* margin-top:150px; */
  border: none !important;
  border-radius: 10px;
  .myButton {
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
    box-shadow: rgb(0 0 0 / 7%) 0px 0px 40px;
  }
  #outer {
    width: 100%;
    text-align: center;
    padding: 6px;
    border: 1px solid;
    border-radius: 5px;
    outline: none;
    color: #2632be;
    font-weight: 600;
    :hover {
      background-color: #2632be;
      a {
        color: white;
      }
    }
  }
  .inner {
    display: inline-block;
  }
  a {
    padding: 10px;
  }
  .active {
    text-decoration: underline;
  }
`;

export default withRouter(Flightsearch);
