import { React, useRef, useState } from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
function Hero() {
  const [scroll, changeScroll] = useState(false);
  const nav = useRef(null);
  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 30;
    changeScroll(distanceY > shrinkOn ? true : false);
  };
  window.addEventListener("scroll", resizeHeaderOnScroll);
  return (
    <div
      ref={nav}
      className={`${classes["nav"]}  ${scroll ? classes.shrink : ""}`}
    >
      <nav className={classes["nav-section"]}>
        <Link to={"/"}>
          <div className={`${classes["logo"]} ${scroll ? classes.chitta : ""}`}>
            CGC Assign
          </div>
        </Link>
        <ul className={classes["nav-lists"]}>
          <li>
            <a
              href="/"
              className={`${classes["link-list"]} ${
                scroll ? classes.chitta : ""
              }`}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`${classes["link-list"]} ${
                scroll ? classes.chitta : ""
              }`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`${classes["link-list"]} ${
                scroll ? classes.chitta : ""
              }`}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`${classes["link-list"]} ${
                scroll ? classes.chitta : ""
              }`}
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`${classes["link-list"]} ${
                scroll ? classes.chitta : ""
              }`}
            >
              Terms of Service
            </a>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default Hero;
