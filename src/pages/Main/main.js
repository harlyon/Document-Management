import React from 'react';
import header from '../../assets/header.png'

const Main = () => {
  return (
    <section className="bg-marketing d-table w-100" id="home">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-7 col-md-7 text-center">
            <img src={header} className="img-fluid" style={{maxHeight: '400px'}} alt="" />
            {/* <img src="https://static-cdn.pixlr.com/images/index/squared.png" alt="" /> //OPTIONAL IMAGE */}
            <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h1 className="heading mb-3"> A Better Way to Manage your Documents</h1>
              <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
              <div className="mt-4 pt-2">
                <a href="/register" className="btn btn-primary mt-2 mr-2">Create an account</a>
                <a href="/login" className="btn btn-outline-primary mt-2">Log into your account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;