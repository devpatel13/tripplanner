import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Bookedtrip = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookedTickets = location.state.bookedTickets;
  const totalPrice = Number(location.state.total);
  console.log(bookedTickets);
  console.log(totalPrice);

  function goToHome() {
    navigate("/");
  }

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
      <div className="container h-100" style={{ margin: "auto" }}>
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
              <div className="card-body" style={{ padding: "30px" }}>
                <div className="row justify-content-center">
                  <div
                    className="col-4 align-self-center"
                    style={{ paddingLeft: "35px" }}
                  >
                    <h2>TripPlanner</h2>
                  </div>
                  <br />
                </div>
                {/* trip1 */}
                {bookedTickets.map((i) => {
                  return (
                    <>
                      <div>
                        <div className="row justify-content-center">
                          <div className="col">
                            <h5>{i.activityName}</h5>
                          </div>
                        </div>
                        <div className="row justify-content-center">
                          <div className="col">
                            <div className="row">
                              <div className="col">
                                Number of Adults: {i.adultsNumber}
                              </div>
                              <div className="col">
                                Price: {i.activityPrice}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                    </>
                  );
                })}
                <br />
                {/* trip2 */}

                <div>
                  <div className="row">
                    <div className="col">
                      <h3>Total</h3>
                    </div>
                    <div className="col">
                      <h4>{totalPrice}$</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row justify-content-center"
              style={{ marginRight: "300px", marginTop: "40px" }}
            >
              <div className="col-4" style={{ paddingLeft: "250px" }}>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => goToHome()}
                >
                  Home
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookedtrip;
