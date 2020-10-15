import React from "react";
import Profile from "./profile";
import Sidebar from "../../components/sidebar";
import TopHeader from "../topheader";

const ProfileIndex = () => {
  return (
    <>
      <TopHeader />
      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <Sidebar />
            <Profile />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileIndex;
