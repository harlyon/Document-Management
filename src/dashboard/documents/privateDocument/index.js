import React from "react";
import Sidebar from "../../../components/sidebar";
import TopHeader from "../../topheader";
import PrivateDocument from "./document";

const PrivateDocumentIndex = () => {
  return (
    <>
      <TopHeader />
      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <Sidebar />
            <PrivateDocument />
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateDocumentIndex;
