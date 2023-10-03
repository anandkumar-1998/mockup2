import React from "react";
import "./Extra.css";
const Extra = () => {
  return (
    <>
      <div className="container m-5 text-center">
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
      <div className="container-fluid text-center" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="container text-center">
          <p
            className="fs-2 pt-3"
            style={{ color: "#ff8b11", fontWeight:"bolder", borderBottom:"3px solid orange",  display: "inline-block" }}
          >
            Our Approach
          </p>
        </div>
          <img className="img-fluid " src="/approach.jpg" alt="" />
      </div>
      <div className="container-fluid p-4">
        <div className="container">
          <div className="row ">
            <div className="col my-5 text-center">
              <h3 className="mb-2" style={{color:"orange", fontWeight:"bolder", borderBottom:"3px solid orange",  display: "inline-block"}}>
                Capacity Building Units(CBU)
              </h3>
            </div>
            <p className="text-center">
              CBC is establishing CBUs in all 93 departments to institutionalise
              the process of capacity building
            </p>
          </div>
          <h6
            className="text-center mb-3 mt-3"
            style={{ color: "#08207c", fontWeight:'bolder',fontSize:"20px" }}
          >
            FUNCTIONS OF CAPACITY BUILDING UNIT AT DEPARTMENTS
          </h6>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="box-style">
                <div className="icon-section blue-border-bg">
                  <img src="/ministry.png" alt="..." className="align-center" />
                </div>
                <h4>Human Resource Development</h4>
                <p className="small">
                  Equip employees with the understading, skills, access to
                  knowledge and training that enables them to perform
                  effectively.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-style2">
                <div className="icon-section orange-border-bg">
                  <img
                    src="/department-icon.png"
                    alt="deparment"
                    className="align-center"
                  />
                </div>
                <h4>Organizational Development</h4>
                <p className="small">
                  Simplify structures and procedures, within government
                  departments through various training and non-training
                  interventions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
            <div className="box-style">
                  <div className="icon-section blue-border-bg">
                    <img
                      src="agency-icon.png"
                      alt="agency"
                      className="align-center"
                    />
                  </div>
                  <h4>Institutional Framework Development</h4>
                  <p className="small">
                    Make systemic changes to create an enabling environment for
                    example, institutionalise, creation of ACBPs
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Extra;
