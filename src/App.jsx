import React from 'react'
import "./App.css";
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <div className="container m-2">
        <h2 className="text-primary text-center">
          National Standards for Civil Service Training Institutions
        </h2>
        <div className="d-flex my-2">
          <div className="row mx-auto">
            <div
              // style={{width:'50vw'}}
              className="card  d-flex flex-row align-items-center w-100 w-md-50"
            >
              <div className="row g-0 my-2 w-100">
                {/* <div className="col-md-1 d-flex ">
                <div style={{backgroundColor: "orange", padding:"30px"}}></div>
            </div> */}
                <div className="col-md-4 align-items-center p-2">
                  <img
                    src="/cbc_logo_large.png"
                    className="rounded-start img-fluid"
                    alt="..."
                    // height={"200px"}
                  />
                </div>
                <div className="col-md-8 cbody rounded">
                  <div className="card-body">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputGrid"
                          placeholder="name@example.com"
                          name="email"
                          // value={value.email}
                          // onChange={(e) => {
                          //   handleChange(e);
                          // }}
                        />
                        <label htmlFor="floatingInputGrid">Email address</label>
                      </div>
                    </div>
                    <div className="col-md-12 my-2">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingInputGrid"
                          placeholder="password"
                          // onChange={(e) => {
                          //   handleChange(e);
                          // }}
                          name="password"
                          // value={value.password}
                        />
                        <label htmlFor="floatingInputGrid">Password</label>
                      </div>
                    </div>
                    <div className="col-md-12 my-2 text-center">
                      <div>
                        <button
                          className="btn btn-outline-primary w-100"
                          // onClick={() => {
                          //   handleClick();
                          // }}
                        >
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
