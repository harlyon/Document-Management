import React from "react";
import clipboard from "../../assets/clipboard.svg";
import vector from "../../assets/vector.svg";
import shield from "../../assets/shield.svg";

const FirstSection = () => {
  return (
    <section className="section mt-0 mt-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="features text-center">
              <div className="image position-relative d-inline-block">
                <img src={clipboard} className="avatar avatar-small" alt="" />
              </div>
              <div className="content mt-4">
                <h4 className="title-2">Easy To Use</h4>
                <p className="text-muted mb-0">
                  Nisi aenean vulputate eleifend tellus vitae eleifend enim a
                  Aliquam eleifend aenean elementum semper.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-5 mt-sm-0">
            <div className="features text-center">
              <div className="image position-relative d-inline-block">
                <img src={shield} className="avatar avatar-small" alt="" />
              </div>
              <div className="content mt-4">
                <h4 className="title-2">Secure</h4>
                <p className="text-muted mb-0">
                  Allegedly, a Latin scholar established the origin of the
                  established text by compiling unusual word.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-5 mt-sm-0">
            <div className="features text-center">
              <div className="image position-relative d-inline-block">
                <img src={vector} className="avatar avatar-small" alt="" />
              </div>
              <div className="content mt-4">
                <h4 className="title-2">Flexible</h4>
                <p className="text-muted mb-0">
                  It seems that only fragments of the original text remain in
                  only fragments the Lorem Ipsum texts used today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
