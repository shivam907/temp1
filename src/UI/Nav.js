import { React, useRef, useState } from "react";
import classes from "./Nav.module.css";
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
        <div className={`${classes["logo"]} ${scroll ? classes.chitta : ""}`}>
          CGC Assign
        </div>
        <ul className={classes["nav-lists"]}>
          <li>
            <a
              href="/"
              className={`${classes["link-list"]} ${
                scroll ? classes.chitta : ""
              }`}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`${classes["link-list"]} ${
                scroll ? classes.chitta : ""
              }`}
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`${classes["link-list"]} ${
                scroll ? classes.chitta : ""
              }`}
            >
              Blog
            </a>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default Hero;
