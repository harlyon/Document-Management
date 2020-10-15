import React from "react";
import Chart from "../components/charts";

const Dashboard = () => {
  return (
    <div className="col-lg-8 col-12">
      <div className="rounded shadow p-4">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="mb-0">My Dashboard:</h5>
        </div>
        <div className="row">
          <div className="col-md-6 mt-4 pt-2">
            <a href="/">
              <div className="card rounded shadow bg-light border-0">
                <div className="card-body">
                  <img
                    src="http://shreethemes.in/landrick/layouts/images/payments/payment/master.png"
                    height={60}
                    className="text-right"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5 className="text-dark">4559</h5>
                    <div className="d-flex justify-content-between">
                      <p className="h6 text-muted mb-0">Public Documents</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 mt-4 pt-2">
            <a href="/">
              <div className="card rounded shadow bg-light border-0">
                <div className="card-body">
                  <img
                    src="http://shreethemes.in/landrick/layouts/images/payments/payment/master.png"
                    height={60}
                    className="text-right"
                    alt=""
                  />
                  <div className="mt-4">
                    <h5 className="text-dark">458</h5>
                    <div className="d-flex justify-content-between">
                      <p className="h6 text-muted mb-0">Personal Documents</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default Dashboard;
