import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "../../../utils/formHooks";
import { withRouter } from "react-router";
import { CREATE_PRIVATE_DOCUMENT } from "../../../graphql/mutations/document";

const PrivateDocumentForm = (props) => {
  const [errors, setErrors] = useState({});
  const { values, onChange, onSubmit } = useForm(createDocumentCallback, {
    text: "",
    title: "",
  });

  const [createDocument, { loading, error }] = useMutation(
    CREATE_PRIVATE_DOCUMENT,
    {
      update(_, { data: { createDocument: docData } }) {
        props.history.push("/private");
      },
      onError(err) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: values,
    }
  );

  function createDocumentCallback() {
    createDocument();
  }
  return (
    <section className="section form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12  mt-4 pt-2">
            <div className="card shadow rounded border-0">
              <div className="card-body">
                <h4 className="card-title">Private Document !</h4>
                <div className="custom-form mt-4">
                  <div id="message" />
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-md-12"></div>
                      <div className="col-md-12">
                        <div className="form-group position-relative">
                          <label>Title</label>
                          <input
                            name="title"
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            value={values.title}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group position-relative">
                          <label>Message</label>
                          <textarea
                            name="text"
                            rows={14}
                            className="form-control"
                            placeholder="Your Message"
                            value={values.text}
                            onChange={onChange}
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
                        />
                        <div id="simple-msg" />
                      </div>
                    </div>
                    {error && (
                      <div className="pt-10" style={{ marginBottom: 20 }}>
                        <ul>
                          <li style={{ color: "red" }}>
                            {error.graphQLErrors[0].message}
                          </li>
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
    </section>
  );
};

export default withRouter(PrivateDocumentForm);
