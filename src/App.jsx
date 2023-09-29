import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Extra from "./components/Extra";

function App() {
  return (
    <>
      <div className="my-3">
        <h2 className="text-center" style={{ color: "#1f3c90" }}>
          Annual Capacity Building Plans (ACBPs)
        </h2>
        <div className="d-flex">
          <div className="me-4 rounded-end-2">
            <img src="/left_curve.png" alt="..." className="img-fluid" />
          </div>
          <div className="text-center my-auto">
            <img src="/cbc_logo_large.png" alt="..." className="w-50" />
          </div>
          <div className="flex-fill justify-content-between d-none d-lg-block text-bg-primary border border-3 rounded-start-4 ps-4">
            <div className="d-flex mx-3 my-3">
              <div className="row cbody w-50 rounded-2">
                <div className="card-body">
                  <div className="">
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="floatingInputGrid"
                        // placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInputGrid">Email Address</label>
                    </div>
                  </div>
                  <div className="col-md-12 my-2">
                    <div className="form-floating">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        // placeholder="Password"
                        id="floatingInputGrid"
                      />
                      <label htmlFor="floatingInputGrid">Password</label>
                    </div>
                  </div>
                  <div className="col-md-12 my-2 text-center">
                    <button className="btn btn-outline-primary w-100">
                      Log In
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="float-right">
                <img src="/modi_ji.png" alt="" className="col-md-4" />
              </div> */}
            </div>
            
          </div>
        </div>
        <Extra/>
      </div>
      <Footer />
    </>
  );
}

export default App;
