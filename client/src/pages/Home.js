import React from "react";
import { Link } from "react-router-dom";
import bg from "../img/data.jpg";
const Home = () => {
  return (
    <>
      <section className="position-relative pb-5">
        <img
          className="d-none d-lg-block position-absolute top-0 start-0 bottom-0 w-50 h-100 img-fluid "
          style={{ objectFit: "cover" }}
          src={bg}
          alt=""
        />
        <div className="position-relative">
          <div className="container">
            <div className="row pt-5">
              <div className="col-12 col-lg-5 ms-auto">
                <div className="mb-5">
                  <h2 className="display-4 fw-bold mb-5">
                    Budgetize
                  </h2>
                  <p className="lead text-muted mb-5">
                  Spend smarter save better
                  </p>
                  <div className="d-flex flex-wrap">
                    
                    <a
                      target="_blank"
                      className="btn btn-secondary mb-2 mb-sm-0"
                      href="https://www.https://youtu.be/Gkb-h5K5riI"
                    >
                      Video Tutorial
                    </a>
                  </div>
                </div>
                <div className="row align-items-center pt-5">
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/slack.png"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/dropbox.png"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/spotify.png"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/stripe.png"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/netflix.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;