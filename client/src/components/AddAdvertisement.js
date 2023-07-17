import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";

const Addadvertisement = () => {
  const navigate = useNavigate();

  const [adName, setAdName] = useState("");
  const [adImage, setAdImage] = useState("");
  const [adLink, setAdLink] = useState("");

  return (
    <section className="vh-100" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <form className="mx-1 mx-md-4">
                    {/* <!-- Ad Name input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="adName"
                        className="form-control"
                        value={adName}
                        onChange={(e) => setAdName(e.target.value)}
                      />
                      <label className="form-label" for="adName">
                        Advertisement Name
                      </label>
                    </div>

                    {/* <!-- Advertisement Image input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="adImage"
                        className="form-control"
                        value={adImage}
                        onChange={(e) => setAdImage(e.target.value)}
                      />
                      <label className="form-label" for="placeImage">
                        Advertisement Image
                      </label>
                    </div>

                    {/* <!-- Advertisement Link input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="adLink"
                        className="form-control"
                        value={adLink}
                        onChange={(e) => setAdLink(e.target.value)}
                      />
                      <label className="form-label" for="adLink">
                        Advertisement Link
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      //   onClick={addActivity}
                    >
                      Add Advertisement
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

export default Addadvertisement;
