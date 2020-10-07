import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
              <a href="/" className="logo-footer">
                <img src={logo} height={74} alt="" />
              </a>
              <p className="mt-4">
                Start working with Squared that can provide everything you need
                to manage and share documents with everyone, peers, collegues
                etc.
              </p>
            </div>
            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">Links</h4>
              <ul className="list-unstyled footer-list mt-4">
                <li>
                  <a href="page-pricing.html" className="text-foot">
                    Register
                  </a>
                </li>
                <li>
                  <a href="auth-cover-login.html" className="text-foot">
                    {" "}
                    Login
                  </a>
                </li>
              </ul>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">Useful Links</h4>
              <ul className="list-unstyled footer-list mt-4">
                <li>
                  <a href="page-terms.html" className="text-foot">
                    {" "}
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a href="page-privacy.html" className="text-foot">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">Newsletter</h4>
              <p className="mt-4">
                Sign up and receive the latest tips via email.
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="foot-subscribe form-group position-relative">
                      <label>
                        Write your email <span className="text-danger">*</span>
                      </label>
                      <i data-feather="mail" className="fea icon-sm icons" />
                      <input
                        type="email"
                        name="email"
                        id="emailsubscribe"
                        className="form-control pl-5 rounded"
                        placeholder="Your email : "
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="submit"
                      id="submitsubscribe"
                      name="send"
                      className="btn btn-soft-primary btn-block"
                      defaultValue="Subscribe"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-bar">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="text-sm-left">
                <p className="mb-0">
                  © 2019-2021 | .
                  <a href="/" target="_blank" className="text-reset">
                    Harry
                  </a>
                </p>
              </div>
            </div>
            {/*end col*/}
            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <ul className="list-unstyled text-sm-right mb-0">
                <li className="list-inline-item">
                  <a href="/">
                    <img
                      src="http://shreethemes.in/landrick/layouts/images/payments/american-ex.png"
                      className="avatar avatar-ex-sm"
                      title="American Express"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <img
                      src="http://shreethemes.in/landrick/layouts/images/payments/discover.png"
                      className="avatar avatar-ex-sm"
                      title="Discover"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <img
                      src="http://shreethemes.in/landrick/layouts/images/payments/master-card.png"
                      className="avatar avatar-ex-sm"
                      title="Master Card"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <img
                      src="http://shreethemes.in/landrick/layouts/images/payments/paypal.png"
                      className="avatar avatar-ex-sm"
                      title="Paypal"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <img
                      src="http://shreethemes.in/landrick/layouts/images/payments/visa.png"
                      className="avatar avatar-ex-sm"
                      title="Visa"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
