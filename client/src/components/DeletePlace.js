import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const DeletePlace = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const placeName = location.state.placeName;
  useEffect(async () => {
    const res = await fetch("/deleteplace", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        placeName,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Delete Place Failed");
      console.log("Delete Place Failed");
    } else {
      window.alert("Delete Place Successful");
      console.log("Delete Place Successful");

      //   navigate("/");
    }
  });

  return (
    <section
      className="vh-200"
      style={{
        backgroundColor: "#8fc4b7",
        paddingBottom: "80px",
        paddingTop: "80px",
        height: "100vh",
      }}
    ></section>
  );
};

export default DeletePlace;
