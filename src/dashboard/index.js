import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Sidebar from "./sidebar";
import TopHeader from "./topheader";

const DashboardIndex = () => {
  return (
    <>
      <TopHeader />
      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <Sidebar />
            <Router>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
            </Router>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardIndex;
