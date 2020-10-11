import React from "react";
import avatar from "../assets/avatar.jpg";
import background from "../assets/background.png";

const TopHeader = () => {
  return (
    <section
      className="bg-profile d-table w-100 pt-0"
      style={{ background: `url(${background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="card public-profile border-0 rounded shadow pt-100"
              style={{ zIndex: 1, paddingTop: "0px" }}
            >
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-lg-2 col-md-3 text-md-left text-center">
                    <img
                      src={avatar}
                      className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-10 col-md-9">
                    <div className="row align-items-end">
                      <div className="col-md-7 text-md-left text-center mt-4 mt-sm-0">
                        <h3 className="title mb-0">Krista Joseph</h3>
                        <small className="text-muted h6 mr-2">
                          Web Developer
                        </small>
                        <ul className="list-inline mb-0 mt-3">
                          <li className="list-inline-item mr-2">
                            <a
                              href="/"
                              className="text-muted"
                              title="Instagram"
                            >
                              <i
                                data-feather="instagram"
                                className="fa fa-instagram mr-2"
                              />
                              krista_joseph
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="/" className="text-muted" title="Linkedin">
                              <i
                                data-feather="linkedin"
                                className="fa fa-facebook mr-2"
                              />
                              Krista Joseph
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-5 text-md-right text-center">
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                          <li className="list-inline-item mr-2">
                            <a
                              href="/"
                              className="rounded"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Add Friend"
                            >
                              <i
                                data-feather="user-plus"
                                className="fa fa-user"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item mr-2">
                            <a
                              href="/"
                              className="rounded"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Messages"
                            >
                              <i
                                data-feather="message-circle"
                                className="fa fa-envelope-o"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item mr-2">
                            <a
                              href="/"
                              className="rounded"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Notifications"
                            >
                              <i data-feather="bell" className="fa fa-bell-o" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="account-setting.html"
                              className="rounded"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Settings"
                            >
                              <i
                                data-feather="tool"
                                className="fa fa-snowflake-o"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
