import React from "react";
import classes from "./Hero.module.css";
import Nav from "./Nav";
import HeroMain from "../Components/Hero/Hero";
function Hero() {
  return (
    <>
      <Nav />
      <div class={classes["hero-main-sh"]}>
        <div class={classes["col-1-sh"]}>CSE</div>
        <div class={classes["col-2-sh"]}>
          <a class={classes["link-sh"]} href="/">
            Home
          </a>
          <span>/</span>
          <a class={classes["link-sh"]} href={<HeroMain />}>
            CSE
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
