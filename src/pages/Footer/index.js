import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
              <a href="#" className="logo-footer">
                <img src="images/logo-light.png" height={24} alt="" />
              </a>
              <p className="mt-4">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">Company</h4>
              <ul className="list-unstyled footer-list mt-4">
                <li><a href="page-aboutus.html" className="text-foot"> About us</a></li>
                <li><a href="page-services.html" className="text-foot"> Services</a></li>
                <li><a href="page-team.html" className="text-foot">Team</a></li>
                <li><a href="page-pricing.html" className="text-foot">Pricing</a></li>
                <li><a href="page-work-modern.html" className="text-foot"> Project</a></li>
                <li><a href="page-jobs.html" className="text-foot"> Careers</a></li>
                <li><a href="page-blog-grid.html" className="text-foot">Blog</a></li>
                <li><a href="auth-cover-login.html" className="text-foot"> Login</a></li>
              </ul>
            </div>{/*end col*/}
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">Usefull Links</h4>
              <ul className="list-unstyled footer-list mt-4">
                <li><a href="page-terms.html" className="text-foot"> Terms of Services</a></li>
                <li><a href="page-privacy.html" className="text-foot">Privacy Policy</a></li>
                <li><a href="documentation.html" className="text-foot"> Documentation</a></li>
                <li><a href="changelog.html" className="text-foot"> Changelog</a></li>
                <li><a href="components.html" className="text-foot"> Components</a></li>
              </ul>
            </div>{/*end col*/}
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">Newsletter</h4>
              <p className="mt-4">Sign up and receive the latest tips via email.</p>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="foot-subscribe form-group position-relative">
                      <label>Write your email <span className="text-danger">*</span></label>
                      <i data-feather="mail" className="fea icon-sm icons" />
                      <input type="email" name="email" id="emailsubscribe" className="form-control pl-5 rounded" placeholder="Your email : " required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary btn-block" defaultValue="Subscribe" />
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
                © 2019-20
                <a
                  href="/"
                  target="_blank"
                  className="text-reset"
                >
                  Harry
                </a>
                .
              </p>
            </div>
          </div>
          {/*end col*/}
          <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <ul className="list-unstyled text-sm-right mb-0">
              <li className="list-inline-item">
                <a href="javascript:void(0)">
                  <img
                    src="http://shreethemes.in/landrick/layouts/images/payments/american-ex.png"
                    className="avatar avatar-ex-sm"
                    title="American Express"
                    alt
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)">
                  <img
                    src="http://shreethemes.in/landrick/layouts/images/payments/discover.png"
                    className="avatar avatar-ex-sm"
                    title="Discover"
                    alt
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)">
                  <img
                    src="http://shreethemes.in/landrick/layouts/images/payments/master-card.png"
                    className="avatar avatar-ex-sm"
                    title="Master Card"
                    alt
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)">
                  <img
                    src="http://shreethemes.in/landrick/layouts/images/payments/paypal.png"
                    className="avatar avatar-ex-sm"
                    title="Paypal"
                    alt
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)">
                  <img
                    src="http://shreethemes.in/landrick/layouts/images/payments/visa.png"
                    className="avatar avatar-ex-sm"
                    title="Visa"
                    alt
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