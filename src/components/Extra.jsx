import React from "react";

const Extra = () => {
  return (
    <>
      <div className="container">
        <div
          className="pe-3 my-2 text-center border rounded-2"
          style={{ backgroundColor: "#fff7ed" }}
        >
          <p className="fs-5 text-black p-4 mb-4">
            The Annual Capacity Building Plan (ACBP) of a ministry/department is
            a comprehensive document detailing all the interventions required to
            develop and enhance the competencies of individual officials within
            that ministry/department as well as the capacity of the
            ministry/department as a whole..
          </p>
        </div>
        <p>
          <img className="img-fluid" src="cbc-tracker_2.jpg" />
        </p>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="container text-center">
          <p className="fs-2 text-center text-decoration-underline">
            Our Approach
          </p>
          <img className="img-fluid " src="/approach.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Extra;
