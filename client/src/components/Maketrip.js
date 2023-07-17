import { React, useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Maketrip = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const navigate = useNavigate();
  const location = useLocation();
  const rootPlaceName = location.state.rootPlaceName;

  const [data, setData] = useState([]);
  const [addActivity, setAddActivity] = useState([]);
  const [adults, setAdults] = useState([]);
  const [sum, setSum] = useState();
  // var sum = 0;

  useEffect(() => {
    fetch(`/maketrip?placeName=${rootPlaceName}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        console.log(data.placeName);
        setData(data.data);
      });
    setSum(0);
  }, []);

  // const [kids, setKids] = useState();
  // const [total, setTotal] = useState();

  function removeActivityToTrip(activityName) {
    var tempNum = 0;
    setAddActivity(
      addActivity.filter((item) => item.activityName !== activityName)
    );
    adults.forEach((element) => {
      tempNum += Number(element.adultsNumber) * element.activityPrice;
    });
    console.log(tempNum);
    setSum(tempNum);
  }

  // function totalAdults() {
  //   const temp = [
  //     ...adults,
  //     {
  //       adultsNumber: adultsNumber,
  //       activityName: activityName,
  //       activityPrice: activityPrice,
  //     },
  //   ];
  //   setAdults(temp);
  //   console.log(adults);
  // }

  function calculateTotal(adultsNumber, activityName, activityPrice) {
    var flag = true;
    var tempNum = 0;
    // console.log(tempNum);
    // console.log(sum);
    // document.getElementById("total").innerText = sum + "$";
    adults.forEach((element) => {
      if (element.activityName == activityName) {
        element.adultsNumber = adultsNumber;
        setAdults(adults);
        console.log(adults);
        flag = false;
      }
    });
    if (flag == true) {
      const temp = [
        ...adults,
        {
          adultsNumber: adultsNumber,
          activityName: activityName,
          activityPrice: activityPrice,
        },
      ];
      console.log(temp);
      setAdults(temp);
    }
    adults.forEach((element) => {
      tempNum += Number(element.adultsNumber) * element.activityPrice;
    });
    console.log(tempNum);
    setSum(tempNum);
  }

  // function setOnClickEvents(_id) {
  //   var elem = document.getElementById(`remove${_id}`);
  //   elem.onclick = function () {
  //     removeActivityToTrip(_id);
  //   };
  //   elem = document.getElementById(`adults${_id}`);
  //   elem.onchange = (event) => {
  //     setAdults(event.target.value);
  //   };
  //   elem = document.getElementById(`add${_id}`);
  //   elem.onclick = function () {
  //     calculateTotal();
  //   };
  //   // elem.setAttribute("onclick", `removeActivityToTrip(_id)`);
  // }

  function addActivityToTrip(i) {
    const temp = [
      ...addActivity,
      {
        activityName: i.activityName,
        activityStartTime: i.activityStartTime,
        activityPrice: i.activityPrice,
      },
    ];
    // console.log(temp);
    setAddActivity(temp);
  }

  function goToBillingPage() {
    navigate("/bookedtrip", { state: { bookedTickets: adults, total: sum } });
  }

  // const addThisActivity = () => {
  //   document.getElementById("tripDetail").innerHTML = ``
  // }

  return (
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
      <section
        className="vh-250"
        style={{
          backgroundColor: "#8fc4b7",
          // paddingBottom: "80px",
          marginBottom: "20px",
          paddingTop: "80px",
          // height: "200vh",
        }}
      >
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-around align-items-center h-100">
            {/* cards */}
            <div className="container">
              <div className="row" style={{ padding: "30px" }}>
                <div className="col-4">
                  <div className="row" style={{ marginBottom: "90px" }}>
                    {/* total price card */}
                    <div
                      className="card"
                      id="gridcard"
                      style={{ overflow: "auto" }}
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h3
                              style={{
                                paddingTop: "10px",
                                paddingLeft: "40px",
                              }}
                            >
                              Total Price :
                            </h3>
                          </div>
                          <div className="col">
                            <h1 id="total">{sum}$</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* activity list card */}
                    <div
                      className="card"
                      id="gridcard"
                      style={{ overflow: "auto" }}
                    >
                      <div className="card-body">
                        <div>
                          <h3>Things To Do In {rootPlaceName}</h3>
                        </div>
                        <br />
                        {/* trips */}
                        {data.map((i) => {
                          return (
                            <div className="card">
                              <div
                                className="card-body"
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <h4>{i.activityName}</h4>
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => addActivityToTrip(i)}
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div
                    className="card"
                    id="addedActivities"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* trip details */}
                    {addActivity.map((i) => {
                      return (
                        <div
                          className="card"
                          style={{ width: "18rem", margin: "30px" }}
                        >
                          <img
                            className="card-img-top"
                            src={require("../img/homeBackImg.jpg")}
                            alt="Card image cap"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{i.activityName}</h5>
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              <div className="row">
                                <div className="col">Timings</div>
                                <div className="col">
                                  {i.activityStartTime}:00
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="row">
                                <div className="col">Adults</div>
                                <div className="col">
                                  <input
                                    type="number"
                                    name="adults"
                                    id={`adults${i.activityName}`}
                                    style={{ width: "7em" }}
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="row">
                                <div className="col">Price</div>
                                <div className="col">{i.activityPrice}$</div>
                              </div>
                            </li>
                          </ul>
                          <div className="card-body">
                            <div className="row">
                              <div className="col">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    removeActivityToTrip(i.activityName)
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                              <div className="col">
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() =>
                                    calculateTotal(
                                      document.getElementById(
                                        `adults${i.activityName}`
                                      ).value,
                                      i.activityName,
                                      i.activityPrice
                                    )
                                  }
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {/* carousel */}
                  </div>
                </div>
              </div>
              {/* save trip button  */}
              <div
                className="row justify-content-center"
                style={{ padding: "0px" }}
              >
                <div className="col-4" style={{ paddingLeft: "250px" }}>
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => goToBillingPage()}
                  >
                    Book Trip
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="card">
          <div className="card-body">This is some text within a card body.</div>
        </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maketrip;

{
  /* <div className="container">
                      <div
                        className="row"
                        style={{
                          padding: "30px",
                        }}
                      >
                        <div className="col-sm">
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              className="card-img-top"
                              src={require("../img/homeBackImg.jpg")}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Activity Name</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">Timing</li>
                              <li className="list-group-item">Adults</li>
                              <li className="list-group-item">Kids</li>
                              <li className="list-group-item">Price</li>
                            </ul>
                            <div className="card-body">
                              <button type="button" class="btn btn-danger">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              className="card-img-top"
                              src={require("../img/homeBackImg.jpg")}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Activity Name</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">Timing</li>
                              <li className="list-group-item">Adults</li>
                              <li className="list-group-item">Kids</li>
                              <li className="list-group-item">Price</li>
                            </ul>
                            <div className="card-body">
                              <button type="button" class="btn btn-danger">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              className="card-img-top"
                              src={require("../img/homeBackImg.jpg")}
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Activity Name</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">Timing</li>
                              <li className="list-group-item">Adults</li>
                              <li className="list-group-item">Kids</li>
                              <li className="list-group-item">Price</li>
                            </ul>
                            <div className="card-body">
                              <button type="button" class="btn btn-danger">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */
}
