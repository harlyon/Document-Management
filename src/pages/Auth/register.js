import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../../context/auth";
import { useForm } from "../../utils/formHooks";
import register from "../../assets/register.jpg";
import { REGISTER_USER } from "../../graphql/mutations/register";
import Toast from "../../components/toast";

const Register = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      props.history.push("/login");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
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
                    className="card login_page border-0"
                    style={{ zIndex: 1 }}
                  >
                    <div className="card-body p-0">
                      <h4 className="card-title text-center">Signup</h4>
                      <form onSubmit={onSubmit} className="login-form mt-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group position-relative">
                              <label>
                                Your Username{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                value={values.username}
                                error={errors.username ? true : false}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group position-relative">
                              <label>
                                Your Email{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                error={errors.email ? true : false}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
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
                          <div className="col-md-12">
                            <div className="form-group position-relative">
                              <label>
                                Confirm Password{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                error={errors.confirmPassword ? true : false}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
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
                                  I Accept{" "}
                                  <a href="/" className="text-primary">
                                    Terms And Condition
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button className="btn btn-primary btn-block">
                              Register{" "}
                              {loading && (
                                <span
                                  className="spinner-border spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                              )}
                            </button>
                          </div>
                          <div className="mx-auto">
                            <p className="mb-0 mt-3">
                              <small className="text-dark mr-2">
                                Already have an account ?
                              </small>{" "}
                              <a
                                href="/login"
                                className="text-dark font-weight-bold"
                              >
                                Sign in
                              </a>
                            </p>
                          </div>
                        </div>
                        <br />
                        {Object.keys(errors).length > 0 && (
                          <div className="pt-10">
                            <ul>
                              {Object.values(errors).map((value) => (
                                <li style={{ color: "red" }} key={value}>
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
          {context.user && (
            <Toast successMessage="Account Registered Successfully!" />
          )}
          <div
            className="col-lg-8 offset-lg-4 padding-less img order-1"
            style={{
              backgroundImage: `url(${"http://shreethemes.in/landrick/layouts/images/contact.svg"})`,
            }}
            data-jarallax='{"speed": 0.5}'
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
