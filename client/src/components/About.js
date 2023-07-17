import { React, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/about", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          window.alert("Please Login First");
          console.log("Please Login First");
          navigate("/login");
        }
        setData(data.user);
        // console.log(data.user.name, "data");
      });
  }, []);
  // console.log(data);
  // const userCheck = (data) => {
  //   if (data.success == false) {
  //     window.alert("Please Login First");
  //     console.log("Please Login First");
  //     navigate("/login");
  //   }
  // };
  // userCheck(data);

  return (
    <section
      className="vh-200"
      style={{
        backgroundColor: "#8fc4b7",
        paddingBottom: "80px",
        paddingTop: "80px",
        height: "100vh",
      }}
    >
      <div className="container h-100">
        <div
          className="row d-flex justify-content-center align-items-center h-100"
          style={{ padding: "30px" }}
        >
          <div className="col-lg-8 col-xl-8" style={{ width: "740px" }}>
            <div
              className="card text-black"
              style={{
                borderRadius: "25px",
              }}
            >
              <div className="card-body">
                <div
                  className="row justify-content-center"
                  style={{ paddingTop: "30px" }}
                >
                  <div className="profilePic" style={{ paddingLeft: "248px" }}>
                    <img
                      src={require("../img/homeBackImg.jpg")}
                      className="card-img-top"
                      id="homeCardImage"
                      alt="image"
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "100px",
                      }}
                    />
                  </div>
                </div>
                <br />
                <br />

                <div className="row justify-content-center">
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <h5>Username:</h5>
                  </div>
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <p>{data.name}</p>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <h5>Email:</h5>
                  </div>
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <p>{data.email}</p>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <h5>Phone:</h5>
                  </div>
                  <div className="col-4" style={{ paddingLeft: "40px" }}>
                    <p>{data.phone}</p>
                  </div>
                </div>
                <br />

                <div className="row justify-content-center">
                  <div
                    className="col-4"
                    style={{ paddingLeft: "90px", marginBottom: "40px" }}
                  >
                    <NavLink to="/mytrips">My Trips</NavLink>
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

export default About;
