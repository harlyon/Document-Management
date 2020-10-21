import React from "react";

const PublicDocument = () => {
  return (
    <div className="col-lg-8 col-12">
      <div className="rounded shadow p-4">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Public Documents:</h5>
          <div>
            <a href="/register" className="btn btn-primary mt-2 mr-2">
              New Document
            </a>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default PublicDocument;
