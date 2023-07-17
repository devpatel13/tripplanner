import { React, useState, useEffect } from "react";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const rootPlaceName = "Surat";
  let count = 0;

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/home", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  }, []);

  function goToAddPlace(rootPlaceName) {
    // rootPlaceName = document.getElementById(`h5Elem${id}`).innerText;
    navigate("/maketrip", { state: { rootPlaceName: rootPlaceName } });
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "#8fc4b7",
          position: "fixed",
          top: "0",
          left: "0",
          minHeight: "100%",
          minWidth: "1024px",
          width: "100%",
          height: "auto",
        }}
      >
        <section className="vh-500">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-around align-items-center h-100">
              {/* cards */}
              {data.map((i) => {
                count = count + 1;
                return (
                  <div
                    className="card"
                    style={{ width: "18rem", marginTop: "150px" }}
                  >
                    <img
                      src={`${i.placeImage}`}
                      className="card-img-top"
                      id="homeCardImage"
                      style={{ height: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" id={`h5Elem${count}`}>
                        {i.placeName}
                      </h5>
                      <div style={{ overflowY: "scroll", height: "100px" }}>
                        <p className="card-text">{i.placeDesc}</p>
                      </div>
                      <br />
                      <button
                        id={`${count}`}
                        onClick={() => goToAddPlace(i.placeName)}
                        className="btn btn-primary"
                      >
                        Plan Trip
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* <div
              className="card"
              style={{ width: "18rem", marginTop: "150px" }}
            >
              <img
                src={require("../img/homeBackImg.jpg")}
                className="card-img-top"
                id="homeCardImage"
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">Place Name</h5>
                <p className="card-text">Place description in brief</p>
                <button onClick={goToAddPlace} className="btn btn-primary">
                  Go Somewhere
                </button>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "18rem", marginTop: "150px" }}
            >
              <img
                src={require("../img/homeBackImg.jpg")}
                className="card-img-top"
                id="homeCardImage"
              />
              <div className="card-body">
                <h5 className="card-title">Place Name</h5>
                <p className="card-text">Place description in brief</p>
                <NavLink to="/maketrip" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "18rem", marginTop: "150px" }}
            >
              <img
                src={require("../img/homeBackImg.jpg")}
                className="card-img-top"
                id="homeCardImage"
              />
              <div className="card-body">
                <h5 className="card-title">Place Name</h5>
                <p className="card-text">Place description in brief</p>
                <NavLink to="/maketrip" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "18rem", marginTop: "150px" }}
            >
              <img
                src={require("../img/homeBackImg.jpg")}
                className="card-img-top"
                id="homeCardImage"
              />
              <div className="card-body">
                <h5 className="card-title">Place Name</h5>
                <p className="card-text">Place description in brief</p>
                <NavLink to="/maketrip" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div> */}
            </div>
            {/* <div className="row d-flex justify-content-around align-items-center h-100">
            
            <div
              className="card"
              style={{ width: "18rem", marginTop: "150px" }}
            >
              <img
                src={require("../img/homeBackImg.jpg")}
                className="card-img-top"
                id="homeCardImage"
              />
              <div className="card-body">
                <h5 className="card-title">Place Name</h5>
                <p className="card-text">Place description in brief</p>
                <NavLink to="/maketrip" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "18rem", marginTop: "150px" }}
            >
              <img
                src={require("../img/homeBackImg.jpg")}
                className="card-img-top"
                id="homeCardImage"
              />
              <div className="card-body">
                <h5 className="card-title">Place Name</h5>
                <p className="card-text">Place description in brief</p>
                <NavLink to="/maketrip" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "18rem", marginTop: "150px" }}
            >
              <img
                src={require("../img/homeBackImg.jpg")}
                className="card-img-top"
                id="homeCardImage"
              />
              <div className="card-body">
                <h5 className="card-title">Place Name</h5>
                <p className="card-text">Place description in brief</p>
                <NavLink to="/maketrip" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "18rem", marginTop: "150px" }}
            >
              <img
                src={require("../img/homeBackImg.jpg")}
                className="card-img-top"
                id="homeCardImage"
              />
              <div className="card-body">
                <h5 className="card-title">Place Name</h5>
                <p className="card-text">Place description in brief</p>
                <NavLink to="/maketrip" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div> */}
          </div>
          {/* <div className="card">
          <div className="card-body">This is some text within a card body.</div>
        </div> */}
        </section>
      </div>
    </>
  );
};

export default Home;
