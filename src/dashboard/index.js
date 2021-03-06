import React from "react";
import Dashboard from "./dashboard";
import Sidebar from "../components/sidebar";
import TopHeader from "./topheader";

const DashboardIndex = () => {
  return (
    <>
      <TopHeader />
      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <Sidebar />
            <Dashboard />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardIndex;
