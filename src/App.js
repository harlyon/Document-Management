import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./dashboard/header";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Footer from "./pages/Footer";
import Main from "./pages/Main/index";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/header" component={Header} />
      <Footer />
    </Router>
  );
}

export default App;
