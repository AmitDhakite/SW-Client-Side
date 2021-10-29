import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          {/* <Route path="/dashboard" exact>
            {localStorage.getItem("token") !== null &&
            localStorage.getItem("token") !== undefined &&
            localStorage.getItem("token") !== "" ? (
              <Dashboard />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/myAccount" exact>
            {localStorage.getItem("token") !== null &&
            localStorage.getItem("token") !== undefined &&
            localStorage.getItem("token") !== "" ? (
              <MyAccount />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/myTrips" exact>
            {localStorage.getItem("token") !== null &&
            localStorage.getItem("token") !== undefined &&
            localStorage.getItem("token") !== "" ? (
              <Trips />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/travelBuddy" exact>
            {localStorage.getItem("token") !== null &&
            localStorage.getItem("token") !== undefined &&
            localStorage.getItem("token") !== "" ? (
              <TravelBuddy />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/chat" exact>
            {localStorage.getItem("token") !== null &&
            localStorage.getItem("token") !== undefined &&
            localStorage.getItem("token") !== "" ? (
              <Chat />
            ) : (
              <Redirect to="/" />
            )}
          </Route> */}
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
