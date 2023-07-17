import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || res.status === 422 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      // console.log(data);
      window.alert("Login Successfull");
      console.log("Login Successfull");

      navigate("/");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-8">
            <div
              className="card text-black"
              style={{ borderRadius: "25px", marginTop: "140px" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-9 col-lg-6 col-xl-5">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                      className="img-fluid"
                      style={{ marginTop: "100px" }}
                      alt="Sample image"
                    />
                  </div>
                  <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form method="POST">
                      <div
                        className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
                        style={{ marginBottom: "20px" }}
                      >
                        <p className="lead h1 fw-bold mb-0 me-3">Sign in</p>
                      </div>

                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control form-control-lg"
                          placeholder="Enter a valid email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control form-control-lg"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="text-center text-lg-start mt-4 pt-2">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={loginUser}
                          style={{
                            paddingLeft: "2.5rem",
                            paddingRight: "2.5rem",
                          }}
                        >
                          Login
                        </button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                          Don't have an account?{" "}
                          <NavLink to="/Signin" className="link-danger">
                            Register
                          </NavLink>
                        </p>
                      </div>
                    </form>
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

export default Login;
