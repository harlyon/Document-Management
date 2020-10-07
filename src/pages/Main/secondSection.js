import React from "react";
import task from "../../assets/task.svg";

const SecondSection = () => {
  return (
    <div>
      <div className="container mt-10 mt-10">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 order-1 order-md-2">
            <img src={task} className="img-fluid" alt="task" />
          </div>
          {/*end col*/}
          <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
            <div className="section-title mr-lg-5">
              <h1 className="text-primary">
                <i className="uil uil-list-ui-alt" />
              </h1>
              <h4 className="title mb-4">
                Plans and Collaborate <br /> your content
              </h4>
              <p className="text-muted">
                Due to its widespread use as filler text for layouts,
                non-readability is of great importance: human perception is
                tuned to recognize certain patterns and repetitions in texts. If
                the distribution of letters visual impact.
              </p>
              <ul className="list-unstyled text-muted">
                <li>
                  <i
                    data-feather="arrow-right-circle"
                    className="fea icon-sm text-primary mr-2"
                  />
                  Digital Marketing Solutions for Tomorrow
                </li>
                <li>
                  <i
                    data-feather="arrow-right-circle"
                    className="fea icon-sm text-primary mr-2"
                  />
                  Create your own skin to match your brand
                </li>
              </ul>
              <a href="/" className="mt-3 h6 text-primary">
                Find Out More <i className="mdi mdi-chevron-right" />
              </a>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">
                Discover what makes{" "}
                <span className="text-primary">Document Manager</span> great.
              </h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                Start working with{" "}
                <span className="text-primary font-weight-bold">Landrick</span>{" "}
                that can provide everything you need to generate awareness,
                drive traffic, connect.
              </p>
              <a href="page-contact-two.html" className="btn btn-primary mt-4">
                {" "}
                Contact us
              </a>
            </div>
          </div>
          {/*end col*/}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
