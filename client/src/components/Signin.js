import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password } = user;

    const res = await fetch("/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Registration Failed");
      console.log("Registration Failed");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      navigate("/login");
    }
  };

  return (
    <section
      className="vh-200"
      style={{
        backgroundColor: "#8fc4b7",
        paddingBottom: "80px",
        paddingTop: "80px",
        // height: "100vh",
      }}
    >
      <div className="container h-50">
        <div
          className="row d-flex justify-content-center align-items-center h-100"
          style={{ padding: "30px" }}
        >
          <div className="col-lg-8 col-xl-8">
            <div
              className="card text-black"
              style={{
                borderRadius: "25px",
              }}
            >
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form method="POST" className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="name">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            value={user.name}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="email">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={user.email}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="phone">
                            Phone
                          </label>
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            className="form-control"
                            value={user.phone}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="password">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            value={user.password}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>

                      {/* <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="cpassword"
                            id="cpassword"
                            className="form-control"
                            value={user.cpassword}
                            onChange={handleInputs}
                          />
                          <label className="form-label" for="cpassword">
                            Repeat your password
                          </label>
                        </div>
                      </div> */}

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" for="form2Example3">
                          I agree all statements in{" "}
                          <NavLink href="#!">Terms of service</NavLink>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          onClick={PostData}
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
