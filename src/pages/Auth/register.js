import React from 'react';
import register from '../../assets/register.jpg'

const Register = () => {
  return (
    <section className="cover-user bg-white">
    <div className="container-fluid px-0">
      <div className="row no-gutters position-relative">
        <div className="col-lg-4 cover-my-30 order-2">
          <div className="cover-user-img d-flex align-items-center">
            <div className="row">
              <div className="col-12">
                <div className="card login_page border-0" style={{zIndex: 1}}>
                  <div className="card-body p-0">
                    <h4 className="card-title text-center">Signup</h4>
                    <form className="login-form mt-4">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>First name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="First Name" name="s" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>Last name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Last Name" name="s" required />
                          </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group position-relative">
                              <label>Your Username <span className="text-danger">*</span></label>
                              <input type="email" className="form-control" placeholder="Username" name="username" required />
                            </div>
                          </div>
                        <div className="col-md-12">
                          <div className="form-group position-relative">
                            <label>Your Email <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" placeholder="Email" name="email" required />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group position-relative">
                            <label>Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" placeholder="Password" required />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                              <label className="custom-control-label" htmlFor="customCheck1">I Accept <a href="/" className="text-primary">Terms And Condition</a></label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button className="btn btn-primary btn-block">Register</button>
                        </div>
                        <div className="mx-auto">
                          <p className="mb-0 mt-3"><small className="text-dark mr-2">Already have an account ?</small> <a href="/login" className="text-dark font-weight-bold">Sign in</a></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 offset-lg-4 padding-less img order-1" style={{backgroundImage: `url(${register})`}} data-jarallax="{&quot;speed&quot;: 0.5}" />
      </div>
    </div>
  </section>
  );
};

export default Register;