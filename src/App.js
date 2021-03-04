import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Index";
import Footer from "./pages/components/Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import Signup from "./pages/Sign-up/Signup";
import Login from "./pages/Sign-up/Login";
import Navbar from "./pages/Home/component/Navbar";
import Forgotpassword from "./pages/Sign-up/Forgotpassword";
import Ticketstatus from "./pages/components/Ticketstatus";
import Flightinfo from "./pages/components/Flightinfo";
import Webcheckin from "./pages/components/Webcheckin";
import PassangerDetails from "./pages/PassangerDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { loadUser } from "./store/auth/AuthAction";
import { connect } from "react-redux";
import store from "./store/rootStore";
import setAuthToken from "./utils/SetAuthTokenUtility";
import PrivateRouter from "./utils/PrivateRouter";
import Dashboard from "./dashboard/App";
import Payment from "./pages/PassangerDetails/Payment";

if (localStorage.token) {
  setAuthToken(localStorage.toke);
}
function App({ auth }) {
  const history = useHistory();
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  // if (auth.user?.result?.role === "admin") {
  //   history.push("/dashboard");
  // }
  console.log(history, "chanfes");
  return (
    <div className="App">
      {history.location.pathname.includes("/dashboard") ? null : <Navbar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={Forgotpassword} />
        <Route path="/ticketstatus" component={Ticketstatus} />
        <Route path="/flightinfo" component={Flightinfo} />
        <Route path="/bookingDetails/:bookingId/payment" component={Payment} />
        <Route
          path="/bookingDetails/:bookingId"
          exact
          component={PassangerDetails}
        />
        <Route path="/webcheckin" component={Webcheckin} />
        <PrivateRouter path="/dashboard" component={Dashboard} />
      </Switch>
      {history.location.pathname.includes("/dashboard") ? null : <Footer />}
      <ToastContainer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(App);
