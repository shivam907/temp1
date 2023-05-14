import React from "react";
import classes from "../Components/SelectSemester/Select.module.css";
import SelectBox from "../Components/SelectSemester/SelectBox";
import Hero from "../UI/Hero";
function SelectSemester() {
  return (
    <>
      <Hero />
      <div className={classes["headingDiv"]}>
        <h1 className={classes["heading"]}>Select your Semester</h1>
      </div>
      <div class={classes["boxes-sh"]}>
        <SelectBox num={1} end=" st" />
        <SelectBox num={2} end=" nd" />
        <SelectBox num={3} end=" rd" />
        <SelectBox num={4} end=" th" />
        <SelectBox num={5} end=" th" />
        <SelectBox num={6} end=" th" />
        <SelectBox num={7} end=" th" />
        <SelectBox num={8} end=" th" />
      </div>
    </>
  );
}

export default SelectSemester;
