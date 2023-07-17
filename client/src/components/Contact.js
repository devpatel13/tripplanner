import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <form className="mx-1 mx-md-4">
                    {/* <!-- Name input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form4Example1"
                        className="form-control"
                      />
                      <label className="form-label" for="form4Example1">
                        Name
                      </label>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form4Example2"
                        className="form-control"
                      />
                      <label className="form-label" for="form4Example2">
                        Email address
                      </label>
                    </div>

                    {/* <!-- Message input --> */}
                    <div className="form-outline mb-4">
                      <textarea
                        className="form-control"
                        id="form4Example3"
                        rows="4"
                      ></textarea>
                      <label className="form-label" for="form4Example3">
                        Message
                      </label>
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form4Example4"
                        checked
                      />
                      <label className="form-check-label" for="form4Example4">
                        Send me a copy of this message
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Send
                    </button>
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

export default Contact;
