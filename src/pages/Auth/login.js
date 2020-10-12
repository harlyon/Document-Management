import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import login from "../../assets/login.jpg";
import { AuthContext } from '../../context/auth';
import { useForm } from '../../utils/formHooks';
import { LOGIN_USER } from '../../graphql/mutations/login';

const Login = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(
      _,
      {
        data: { login: userData }
      }
    ) {
      context.login(userData);
      props.history.push('/dashboard');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <section className="cover-user bg-white">
      <div className="container-fluid px-0">
        <div className="row no-gutters position-relative">
          <div className="col-lg-4 cover-my-30 order-2">
            <div className="cover-user-img d-flex align-items-center">
              <div className="row">
                <div className="col-12">
                  <div
                    className="card login-page border-0"
                    style={{ zIndex: 1 }}
                  >
                    <div className="card-body p-0">
                      <h4 className="card-title text-center">Login</h4>
                      <form onSubmit={onSubmit}>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group position-relative">
                              <label>
                                Your Username{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                type="text"
                                value={values.username}
                                error={errors.username ? true : false}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group position-relative">
                              <label>
                                Password <span className="text-danger">*</span>
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={values.password}
                                error={errors.password ? true : false}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="d-flex justify-content-between">
                              <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customCheck1"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>
                              <p className="forgot-pass mb-0">
                                <a
                                  href="auth-cover-re-password.html"
                                  className="text-dark font-weight-bold"
                                >
                                  Forgot password ?
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12 mb-0">
                            <button type="submit" className="btn btn-primary btn-block">
                              Sign in {" "}
                              {loading && (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>)}
                            </button>
                          </div>
                          <div className="col-12 text-center">
                            <p className="mb-0 mt-3">
                              <small className="text-dark mr-2">
                                Don't have an account ?
                              </small>{" "}
                              <a
                                href="/register"
                                className="text-dark font-weight-bold"
                              >
                                Sign Up
                              </a>
                            </p>
                          </div>
                        </div>
                        <br />
                        {Object.keys(errors).length > 0 && (
                        <div className="pt-10">
                          <ul>
                            {Object.values(errors).map((value) => (
                              <li style={{color: 'red'}} key={value}>
                                {value}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 offset-lg-4 padding-less img order-1"
            style={{ backgroundImage: `url(${login})` }}
            data-jarallax='{"speed": 0.5}'
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
