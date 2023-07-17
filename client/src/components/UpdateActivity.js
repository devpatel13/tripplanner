import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const UpdateActivity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rootActivityName = location.state.activityName;

  const [activity, setActivity] = useState({
    placeName: "",
    activityName: "",
    activityImage: "",
    activityPrice: "",
    activityStartTime: "",
    activityEndTime: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setActivity({ ...activity, [name]: value });
  };

  const updateActivity = async (e) => {
    e.preventDefault();

    const {
      placeName,
      activityName,
      activityImage,
      activityPrice,
      activityStartTime,
      activityEndTime,
    } = activity;

    const res = await fetch("/updateactivity", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rootActivityName,
        placeName,
        activityName,
        activityImage,
        activityPrice,
        activityStartTime,
        activityEndTime,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || res.status === 422 || !data) {
      window.alert("Update Activity Failed");
      console.log("Update Activity Failed");
    } else {
      // console.log(data);
      window.alert("Update Activity Successfull");
      console.log("Update Activity Successfull");

      navigate("/");
    }
  };

  return (
    <section className="vh-200" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black"
              style={{ borderRadius: "25px", margin: "70px" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <form method="POST" className="mx-1 mx-md-4">
                    {/* <!-- Place Name input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="placeName"
                        name="placeName"
                        className="form-control"
                        value={activity.placeName}
                        onChange={handleInputs}
                      />
                      <label className="form-label" for="placeName">
                        Tourist Place Name
                      </label>
                    </div>

                    {/* <!-- Activity input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="activityName"
                        name="activityName"
                        className="form-control"
                        value={activity.activityName}
                        onChange={handleInputs}
                      />
                      <label className="form-label" for="activityName">
                        Activity Name
                      </label>
                    </div>

                    {/* <!-- Activity Image input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="activityimage"
                        name="activityImage"
                        className="form-control"
                        value={activity.activityImage}
                        onChange={handleInputs}
                      />
                      <label className="form-label" for="activityImage">
                        Activity Image Link
                      </label>
                    </div>

                    {/* <!-- Activity Price input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        id="activityPrice"
                        name="activityPrice"
                        className="form-control"
                        value={activity.activityPrice}
                        onChange={handleInputs}
                      />
                      <label className="form-label" for="activityPrice">
                        Activity Price
                      </label>
                    </div>

                    {/* <!-- Activity Start Time input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        id="activityStartTime"
                        name="activityStartTime"
                        className="form-control"
                        value={activity.activityStartTime}
                        onChange={handleInputs}
                      />
                      <label className="form-label" for="activityStartTime">
                        Activity Start Time
                      </label>
                    </div>

                    {/* <!-- Activity End Time input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        id="activityEndTime"
                        name="activityEndTime"
                        className="form-control"
                        value={activity.activityEndTime}
                        onChange={handleInputs}
                      />
                      <label className="form-label" for="activityEndTime">
                        Activity End Time
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onClick={updateActivity}
                    >
                      Update Activity
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

export default UpdateActivity;
