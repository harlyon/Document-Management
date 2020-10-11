import React from "react";

const Sidebar = () => {
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
                href="account-works.html"
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
                href="account-works.html"
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
                href="account-messages.html"
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
                href="auth-login-three.html"
                className="accounts rounded d-block shadow text-center py-3"
              >
                <span className="pro-icons h3 text-muted">
                  <i className="fa fa-arrow-circle-o-right" />
                </span>
                <h6 className="title text-dark h6 my-0">Logout</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="widget mt-4 pt-2">
          <h5 className="widget-title">My Socials :</h5>
          <ul className="list-unstyled social-icon mb-0 mt-4">
            <li className="list-inline-item mr-2">
              <a href="/" className="rounded">
                <i data-feather="facebook" className="fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item mr-2">
              <a href="/" className="rounded">
                <i data-feather="instagram" className="fa fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item mr-2">
              <a href="/" className="rounded">
                <i data-feather="twitter" className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item mr-2">
              <a href="/" className="rounded">
                <i data-feather="linkedin" className="fa fa-linkedin" />
              </a>
            </li>
            <li className="list-inline-item mr-2">
              <a href="/" className="rounded">
                <i data-feather="github" className="fa fa-github" />
              </a>
            </li>
            <li className="list-inline-item mr-2">
              <a href="/" className="rounded">
                <i data-feather="youtube" className="fa fa-youtube" />
              </a>
            </li>
            <li className="list-inline-item mr-2">
              <a href="/" className="rounded">
                <i data-feather="gitlab" className="fa fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
