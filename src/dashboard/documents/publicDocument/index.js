import React from "react";
import Sidebar from "../../../components/sidebar";
import TopHeader from "../../topheader";
import PublicDocument from "./document";

const PublicDocumentIndex = () => {
  return (
    <>
      <TopHeader />
      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <Sidebar />
            <PublicDocument />
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicDocumentIndex;
