import React from "react";

const PublicDocumentForm = () => {
  return (
    <section className="section form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12  mt-4 pt-2">
            <div className="card shadow rounded border-0">
              <div className="card-body">
                <h4 className="card-title">Public Document !</h4>
                <div className="custom-form mt-4">
                  <div id="message" />
                  <form>
                    <div className="row">
                      <div className="col-md-12"></div>
                      <div className="col-md-12">
                        <div className="form-group position-relative">
                          <label>Title</label>
                          <input
                            name="subject"
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group position-relative">
                          <label>Message</label>
                          <textarea
                            name="comments"
                            id="comments"
                            rows={14}
                            className="form-control"
                            placeholder="Your Message :"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary btn-block"
                          defaultValue="Send Message"
                        />
                        <div id="simple-msg" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicDocumentForm;
