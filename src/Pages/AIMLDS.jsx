import React, { useRef } from "react";
import classes from "../Components/SelectSemester/Select.module.css";
import SelectBox from "../Components/SelectSemester/SelectBox";
import Loader from "../UI/Loader";
import Hero from "../UI/Hero";
import { Link } from "react-router-dom";
function SelectSemester() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero head="AI ML DS" />
          <div className={classes["headingDiv"]}>
            <h1 className={classes["heading"]}>Select your Semester</h1>
          </div>
          <div class={classes["boxes-sh"]}>
            <Link to={"/CSE1stSem"}>
              <SelectBox num={1} end=" st" />
            </Link>
            <Link to={"/CSE2ndSem"}>
              <SelectBox num={2} end=" nd" />
            </Link>
            <Link to={"/CSE3rdSem"}>
              <SelectBox num={3} end=" rd" />
            </Link>
            <Link to={"/CSE4thSem"}>
              <SelectBox num={4} end=" th" />
            </Link>
            <Link to={"/CSE5thSem"}>
              <SelectBox num={5} end=" th" />
            </Link>
            <Link to={"/CSE6thSem"}>
              <SelectBox num={6} end=" th" />
            </Link>
            <Link to={"/CSE7thSem"}>
              <SelectBox num={7} end=" th" />
            </Link>
            <Link to={"/CSE8thSem"}>
              <SelectBox num={8} end=" th" />
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default SelectSemester;
