import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating"
              href="https://www.facebook.com/profile.php?id=100074355441540"
              role="button"
              rel="noreferrer"
              target={"_blank"}
              >
              <i className="fa fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating"
              href="https://www.instagram.com/a.h.s.a.n.arif/"
              role="button"
                rel="noreferrer"
                target={"_blank"}
                >
              <i className="fa fa-twitter"></i>
            </a>

            {/* <Link
              className="btn btn-outline-light btn-floating"
              href="/"
              role="button"
              >
              <i className="fa fa-google"></i>
            </Link> */}

            <a
              className="btn btn-outline-light btn-floating"
              href="https://www.instagram.com/a.h.s.a.n.arif/"
              role="button"
                rel="noreferrer"
                target={"_blank"}
                >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating"
              href="https://www.linkedin.com/in/ahsan-arif-642ba822b/"
              role="button"
              rel="noreferrer"
              target={"_blank"}
              >
              <i className="fa fa-linkedin"></i>
            </a>

            {/* <a
              className="btn btn-outline-light btn-floating"
              href="https://github.com/asharahsan"
              role="button"
              rel="noreferrer"
              target={"_blank"}
              >
              <i className="fa fa-github"></i>
            </a> */}
          </section>
        </div>
        <h4 className="text-center">
          Made by {"Ahsan Arif"}
        </h4>
      </footer>
    </div>
  );
}

