import { React, useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const EditActivity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const placeName = location.state.placeName;

  let count = 0;

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/editactivity?placeName=${placeName}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  }, []);

  function goToUpdateActivity(activityName) {
    // rootPlaceName = document.getElementById(`h5Elem${id}`).innerText;
    navigate("/updateactivity", { state: { activityName: activityName } });
  }

  const deleteActivity = async (e) => {
    e.preventDefault();
    let activityName = e.target.value;

    // const { name, image, desc } = place;

    // console.log(image);

    const res = await fetch("/deleteactivity", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activityName,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Delete Activity Failed");
      console.log("Delete Activity Failed");
    } else {
      window.alert("Delete Activity Successful");
      console.log("Delete Activity Successful");

      //   navigate("/update");
      window.location.reload();
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="placeTable">
                    {/* rows */}
                    {data.map((i) => {
                      count = count + 1;
                      return (
                        <>
                          <div className="row">
                            <div className="col">{count}</div>
                            <div className="col-8">{i.activityName}</div>
                            <div
                              className="col"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <button
                                type="button"
                                className="btn btn-info"
                                onClick={() =>
                                  goToUpdateActivity(i.activityName)
                                }
                              >
                                Update
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                value={i.activityName}
                                onClick={deleteActivity}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                          <br />
                        </>
                      );
                    })}
                    {/* <div className="row">
                          <div className="col">1</div>
                          <div className="col-8">Surat</div>
                          <div
                            className="col"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <button type="button" className="btn btn-info">
                              Update
                            </button>
                            <button type="button" className="btn btn-danger">
                              Delete
                            </button>
                          </div>
                        </div> */}
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

export default EditActivity;
