import React from "react";
import Sidebar from "../../../components/sidebar";
import TopHeader from "../../topheader";
import CreateDocument from "./document";

const CreateDocumentIndex = () => {
  return (
    <>
      <TopHeader />
      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <Sidebar />
            <CreateDocument />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateDocumentIndex;
