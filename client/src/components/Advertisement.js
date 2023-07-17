import React from "react";
import { NavLink } from "react-router-dom";

const Advertisement = () => {
  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style={{ paddingRight: "850px" }}>
          <div
            class="modal-content"
            style={{ height: "750px", width: "850px" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ad Name
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <NavLink to="/">
                <img
                  className="card-img-top"
                  src={require("../img/homeBackImg.jpg")}
                  alt="Card image cap"
                  style={{ height: "580px" }}
                  onClick="/home"
                />
              </NavLink>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
