import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar_landing.css";

function Navbar() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".custom-navbar");
      if (window.scrollY > 5) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand px-4 mx-4" href="/">
          Boardly.in
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {
          <form className="d-flex mx-4 px-4" role="search">
            <button
              className="button1 mx-4 px-4"
              type="button"
              onClick={() => navigate("/")}
            >
              <span>Login</span>
            </button>
            <button
              className="button1 mx-4 px-4"
              type="button"
              onClick={() => navigate("/")}
            >
              <span>Sign Up</span>
            </button>
          </form>
      }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
