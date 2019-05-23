import { Link, animateScroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const scrollToTop = () => {
  animateScroll.scrollToTop();
};

const liStyle = {
  display: "inline-block",
  height: "8vh",
  margin: "0 .5em"
};

const navStyle = show => {
  if (show) {
    return "navbar top-nav";
  } else {
    return "navbar else-nav";
  }
};

const dropDown = drop => {
  if (drop) {
    return "mobileLinks drop";
  } else {
    return "mobileLinks";
  }
};

const Nav = props => {
  const [navHideRef, showNav] = useInView({
    /* Optional options */
    threshold: 0.9
  });

  const [dropped, navDrop] = useState(false);

  return (
    <React.Fragment>
      <div className={navStyle(showNav)}>
        <a
          onClick={scrollToTop}
          style={{ textAlign: "right", cursor: "pointer" }}
        >
          <img
            alt="YumNum Logo"
            style={{ height: "10vh", padding: "0", margin: "0 0 0 auto" }}
            src="../static/yumnumlogo.png"
          />
        </a>

        <ul className="webLinks">
          <li className="menuLink" style={liStyle}>
            <Link
              activeClass="active"
              to="menu"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Menu
            </Link>
          </li>
          <li className="dealLink" style={liStyle}>
            <Link
              activeClass="active"
              to="deals"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Deal of the Week
            </Link>
          </li>
          <li className="mapLink" style={liStyle}>
            <Link
              activeClass="active"
              to="map"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Locations
            </Link>
          </li>
          <li className="aboutLink" style={liStyle}>
            <Link
              activeClass="active"
              to="about-us"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              About Us
            </Link>
          </li>
          <li className="contactLink" style={liStyle}>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <a
          onClick={() => {
            navDrop(!dropped);
          }}
          className="menuButton"
        >
          <img
            alt="Navigation button."
            src="../static/menu-button.svg"
            style={{
              height: "10vh",
              width: "12.5%",
              maxWidth: "40px",
              marginLeft: "72.5%",
              padding: "0 5%",
              cursor: "pointer"
            }}
          />
        </a>
      </div>

      <div
        ref={navHideRef}
        className="nav-fade"
        style={{
          width: "100%",
          height: "10vh",
          padding: "0",
          margin: "0",
          position: "absolute",
          top: "0",
          zIndex: "-1"
        }}
      />

      <div className={dropDown(dropped)}>
        <ul>
          <li className="menuLink" style={{ display: "block" }}>
            <Link
              as="a"
              activeClass="active"
              to="menu"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Menu
            </Link>
          </li>
          <li className="dealLink" style={{ display: "block" }}>
            <Link
              activeClass="active"
              to="deals"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Deal of the Week
            </Link>
          </li>
          <li className="mapLink" style={{ display: "block" }}>
            <Link
              activeClass="active"
              to="map"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Locations
            </Link>
          </li>
          <li className="aboutLink" style={{ display: "block" }}>
            <Link
              activeClass="active"
              to="about-us"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              About Us
            </Link>
          </li>
          <li className="contactLink" style={{ display: "block" }}>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              offset={-100}
              smooth={true}
              duration={750}
              style={{
                color: "#967256",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Nav;
