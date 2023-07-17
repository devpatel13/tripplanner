import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

const Dump = () => {
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
      <div className="container-fluid h-custom">
        <Carousel responsive={responsive}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </div>
    </section>
  );
};

export default Dump;
