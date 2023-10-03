import React from "react";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="my-3">
        <h2 className="text-center fs-1 p-lg-4" style={{ color: "#1f3c90" }}>
          ACBP Implementation Dashboard
        </h2>
        <div className="d-flex align-items-center">
          <div className="me-2 rounded-end-2">
            <img
              src="/left_curve.png"
              alt="..."
              className="d-none d-lg-block"
            />
            <img
              src="/left_curve.png"
              alt="..."
              className="img-fluid d-lg-none"
            />
          </div>
          <div className="text-center my-auto px-lg-5">
            <img
              src="/cbc_logo_large.png"
              alt="..."
              className="w-75 d-none d-lg-block"
            />
            <img
              src="/cbc_logo_large.png"
              alt="..."
              className="w-50 d-lg-none"
            />
          </div>
          <div className="row w-75 align-items-center cbody2 py-md-3">
            <div className="col-md-6 col-sm-6 mx-3 cbody p-lg-4 p-sm-3 d-none d-sm-block">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="password"
                />
              </div>
              <span className="pt-3 pb-3 mb-3">Forget Password</span>
              <button className="w-100 btn btn-outline-primary pt-2">Log In</button>
              <div className="text-center mt-2 mb-2">
                <p>In case of any trouble <span className="">contact us</span></p>
              </div>
            </div>
            <div className="d-none col d-lg-block"></div>
            <div className="col-lg-3 col-md-4 col-sm-5 d-none d-lg-block d-sm-block pt-2">
              <img src="/modi_ji.png" className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
