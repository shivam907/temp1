import { React, useRef, useState } from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Hero() {
  const [scroll, changeScroll] = useState(false);
  const [open, changeOpen] = useState(false);
  function change() {
    changeOpen(open ? false : true);
  }
  const nav = useRef(null);
  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 30;
    changeScroll(distanceY > shrinkOn ? true : false);
  };
  window.addEventListener("scroll", resizeHeaderOnScroll);
  return (
    <>
      <div
        ref={nav}
        className={`${classes["nav"]}  ${scroll ? classes.shrink : ""}`}
      >
        <nav className={classes["nav-section"]}>
          <Link to={"/"}>
            <div
              className={`${classes["logo"]} ${scroll ? classes.chitta : ""}`}
            >
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
          <MenuIcon
            className={classes.menuIcon}
            onClick={change}
            fontSize={"large"}
          />
        </nav>
      </div>
      {open && (
        <div className={classes.menu}>
          <CloseIcon
            onClick={change}
            className={classes.closeIcon}
            fontSize={"large"}
          />
          <ul className={classes["nav-lists1"]}>
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
          </ul>
        </div>
      )}
    </>
  );
}

export default Hero;
