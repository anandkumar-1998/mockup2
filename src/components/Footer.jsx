import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center text-lg-start my-3">
      {/* <!-- Grid container --> */}
      <div className="container p-4">
        {/* <!--Grid row--> */}
        <div className="row">
          {/* <!--Grid column--> */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>
          {/* <!--Grid column-->

      <!--Grid column--> */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
          {/* <!--Grid column-->

      <!--Grid column--> */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </div>
      {/* <!-- Grid container -->

  <!-- Copyright --> */}
      <div className="text-center p-3" style={{ backgroundColor: "darkblue" }}>
        © 2023 Copyright:
        <a
          className="ms-2 text-white text-decoration-none"
          href="https://cbc.gov.in/"
        >
          Capacity Building Commission
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
