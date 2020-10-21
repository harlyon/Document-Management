import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
      <div className="sidebar sticky-bar p-4 rounded shadow">
        <div className="widget">
          <div className="row">
            <div className="col-6 mt-4 pt-2">
              <a
                href="/dashboard"
                className="accounts rounded d-block shadow text-center py-3"
              >
                <span className="pro-icons h3 text-muted">
                  <i className="fa fa-file-o" />
                </span>
                <h6 className="title text-dark h6 my-0">My Dashboard</h6>
              </a>
            </div>
            <div className="col-6 mt-4 pt-2">
              <a
                href="/profile"
                className="accounts rounded d-block shadow text-center py-3"
              >
                <span className="pro-icons h3 text-muted">
                  <i className="fa fa-file-o" />
                </span>
                <h6 className="title text-dark h6 my-0">My Profile</h6>
              </a>
            </div>
            <div className="col-6 mt-4 pt-2">
              <a
                href="/private"
                className="accounts rounded d-block shadow text-center py-3"
              >
                <span className="pro-icons h3 text-muted">
                  <i className="fa fa-file-o" />
                </span>
                <h6 className="title text-dark h6 my-0">My Documents</h6>
              </a>
            </div>
            <div className="col-6 mt-4 pt-2">
              <a
                href="public"
                className="accounts rounded d-block shadow text-center py-3"
              >
                <span className="pro-icons h3 text-muted">
                  <i className="fa fa-list-alt" />
                </span>
                <h6 className="title text-dark h6 my-0">Public Documents</h6>
              </a>
            </div>
            <div className="col-6 mt-4 pt-2">
              <a
                href="/create"
                className="accounts rounded d-block shadow text-center py-3"
              >
                <span className="pro-icons h3 text-muted">
                  <i className="fa fa-envelope-o" />
                </span>
                <h6 className="title text-dark h6 my-0">New Document</h6>
              </a>
            </div>
            <div className="col-6 mt-4 pt-2">
              <a
                href="/"
                className="accounts rounded d-block shadow text-center py-3"
                onClick={logout}
              >
                <span className="pro-icons h3 text-muted">
                  <i className="fa fa-arrow-circle-o-right" />
                </span>
                <h6 className="title text-dark h6 my-0">Logout</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
