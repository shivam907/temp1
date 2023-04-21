import { React, useRef, useState } from "react";
import classes from "./Nav.module.css";
function Hero() {
  //   const componentDidMount = () => {
  //   };
  const [scrol, changeScrol] = useState(false);
  const nav = useRef(null);
  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 30,
      headerEl = nav;
    //   headerEl = document.getElementsByClassName("nav");

    if (distanceY > shrinkOn) {
      console.log("nav");
      changeScrol(true);
    } else {
      console.log("nav");
      // console.log(nav.current.children[0].classList);
      changeScrol(false);
      //   console.log(nav.current.classes);
      //   nav.current.className = "";
      //   nav.current.children[0].classList.remove("shrink");
    }
  };
  window.addEventListener("scroll", resizeHeaderOnScroll);
  return (
    <div
      ref={nav}
      className={`${classes["nav"]}  ${scrol ? classes.shrink : ""}`}
    >
      <nav className={classes["nav-section"]}>
        <div className={`${classes["logo"]} ${scrol ? classes.chitta : ""}`}>
          CGC Assign
        </div>
        <ul className={classes["nav-lists"]}>
          <li>
            <a
              className={`${classes["link-list"]} ${
                scrol ? classes.chitta : ""
              }`}
            >
              Features
            </a>
          </li>
          <li>
            <a
              className={`${classes["link-list"]} ${
                scrol ? classes.chitta : ""
              }`}
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              className={`${classes["link-list"]} ${
                scrol ? classes.chitta : ""
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
