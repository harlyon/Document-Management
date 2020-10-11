import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import DashboardIndex from "./dashboard";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Footer from "./pages/Footer";
import Main from "./pages/Main/index";

function App() {
  return (
    <>
      <DashboardIndex />
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
