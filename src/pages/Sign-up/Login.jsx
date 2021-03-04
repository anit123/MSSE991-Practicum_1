import React, { Component } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/auth/AuthAction";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("This is required field!"),
  password: Yup.string().required("This is required field!"),
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: "",
      },
    };
  }

  handleLoginSubmit = (values) => {
    this.props.login(values.email, values.password);
    console.log(this.props.auth);
    if (this.props.auth.user?.result?.role === "admin") {
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    if (this.props.auth.user?.result?.role === "admin") {
      // this.props.history.push("/dashboard");
      return <Redirect to="/dashboard" />;
    }
    return (
      <LoginWrapper>
        <div className="background-img">
          <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
              <div className="user-card">
                <img src="images/login-image.jpg" alt="" />
              </div>
              <div class="user_card">
                <div class="d-flex justify-content-center">
                  <h1>Flight Reservation</h1>
                </div>
                <div class="d-flex justify-content-center form_container">
                  <Formik
                    initialValues={this.state.formData}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      this.handleLoginSubmit(values);
                    }}
                  >
                    {({ handleChange, handleBlur, values }) => {
                      return (
                        <Form>
                          <div className="form-row">
                            <div className="col-sm-12 mb-3">
                              <div class="input-group ">
                                <div class="input-group-append">
                                  <span class="input-group-text">
                                    <i class="fas fa-user"></i>
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  class="form-control input_user"
                                  value={values.email}
                                  placeholder="username"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="email"
                                />
                              </div>
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col-sm-12 mb-3">
                              <div class="input-group">
                                <div class="input-group-append">
                                  <span class="input-group-text">
                                    <i class="fas fa-user"></i>
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  class="form-control input_user"
                                  value={values.password}
                                  placeholder="password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="password"
                                />
                              </div>
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            name="button"
                            class="btn login_btn"
                          >
                            Login
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                  {/* <form>
                    <div class="input-group mb-3">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name=""
                        class="form-control input_user"
                        value=""
                        placeholder="username"
                      />
                    </div>
                    <div class="input-group mb-2">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        name=""
                        class="form-control input_pass"
                        value=""
                        placeholder="password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customControlInline"
                        />
                        <label
                          class="custom-control-label"
                          for="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mt-3 login_container">
                      <button type="button" name="button" class="btn login_btn">
                        Login
                      </button>
                    </div>
                  </form> */}
                </div>

                <div class="mt-4">
                  <div class="d-flex justify-content-center links">
                    Don't have an account?{" "}
                    <Link to="/signup" class="ml-2">
                      Sign Up
                    </Link>
                  </div>
                  <div class="d-flex justify-content-center links">
                    <Link to="/forgotpassword">Forgot your password?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginWrapper>
    );
  }
}

const LoginWrapper = styled.div`
  .user_card {
    height: 400px;
    width: 350px;
    margin-top: 10%;
    margin-bottom: auto;
    background: white;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  .brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #60a3bc;
    padding: 10px;
    text-align: center;
  }
  .brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
  }
  .form_container {
    margin-top: 10%;
  }
  .login_btn {
    width: 100%;
    background: #4cafdd !important;
    color: white !important;
  }
  .login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .login_container {
    padding: 0 2rem;
  }
  .input-group-text {
    background: #4cafdd !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
  }
  .input_user,
  .input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label::before {
    background-color: #4cafdd !important;
  }
  h1 {
    font-size: x-large;
    font-weight: 700;
    color: #090979;
  }
  img {
    margin-top: 111px;
    height: 400px;
    margin-left: 6%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-right: 38px;
  }
  .background-img {
    background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    /* background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%), url("images/banner-image.jpg"); */
    height: 85vh;
    background-size: cover;
  }
`;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
