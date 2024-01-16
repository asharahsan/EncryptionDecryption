import React from "react";
import "./About.css";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div
      className="d-flex h-100 text-center"
      style={{ height: "100vh" }}
    >
      <div
        className="cover-container d-flex w-100 p-3 mx-auto flex-column"
        style={{ height: "92vh" }}
      >

        <main className="px-3">
          <h1>Encryption Website.</h1>
          <p className="lead">
            This website Encrypt and Decrypt your text using some of the most
            popular encryption algorithms.
          </p>
        </main>

        
      </div>
      
    </div>
  );
}
