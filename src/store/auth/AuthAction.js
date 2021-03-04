import axios from "axios";
import {
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../../constants/types";
import setAuthToken from "../../utils/SetAuthTokenUtility";
import { baseURl as apiEndPoint } from "../../constants/apiContact";
import { toast } from "react-toastify";
// Getting data from user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.toke);
    dispatch({
      type: USER_LOADED,
      payload: localStorage.toke,
    });
  }
  try {
    const res = await axios.get(`${apiEndPoint}api/v1/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    // console.log(error);
  }
};

// Register user
export const register = ({ name, email, password, passwordConfirm }) => async (
  dispatch
) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = { name, email, password, passwordConfirm };

  try {
    const res = await axios.post(
      `${apiEndPoint}api/v1/users/signup`,
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    if (res.status === 201) {
      dispatch({
        type: USER_LOADED,
        payload: localStorage.toke,
      });
    }
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// login user
export const login = (email, password, history) => async (dispatch) => {
  // const config = {
  //   header: {
  //     'Content-Type': 'application/json',
  //   },
  // };

  try {
    const res = await axios.post(`${apiEndPoint}api/v1/users/login`, {
      email: email,
      password: password,
    });
    if (res.status === "success") {
      toast.success("Login successfully");
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//logout user
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
