import React, { Component } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/all";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { register } from "../../store/auth/AuthAction";
import { connect } from "react-redux";

const initialValue = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("This is required field!"),
  email: Yup.string().email().required("This is required field!"),
  password: Yup.string().min(6).required("This is required field!"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("This is required field!"),
});
class Signup extends Component {
  handleFormSubmit = (values) => {
    console.log(values);
    this.props.register({
      name: values.name,
      email: values.email,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
    });
  };
  render() {
    return (
      <SignupWrapper>
        <div className="card ">
          <div className="card-body">
            <h5>Register for sign in</h5>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValue}
              onSubmit={(values) => {
                this.handleFormSubmit(values);
              }}
            >
              {({ values, handleBlur, handleChange }) => {
                return (
                  <Form>
                    <div class="form-row">
                      <div className="col-md-6">
                        <div class="form-group ">
                          <label htmlFor="from">Name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group ">
                          <label for="inputPassword4">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group ">
                          <label htmlFor="from">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group ">
                          <label htmlFor="from">Confirm Password</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            name="passwordConfirm"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="passwordConfirm"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <button type="submit" class="btn btn-primary">
                        Submit
                        <BsArrowRight />
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </SignupWrapper>
    );
  }
}

const SignupWrapper = styled.div`
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
  }
  /* background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%), url("images/banner-image.jpg"); */
  height: 85vh;
  background-size: cover;
  padding-top: 10%;
`;

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { register })(Signup);
