import React from "react";
import classes from "./SubjectBox.module.css";
import { Link } from "react-router-dom";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
function Box(props) {
  const boxes = [];
  for (let i = 0; i < props.number; i++) {
    const data = [];
    console.log(props.data1);
    for (let j = 0; j < props[`data${i + 1}`][0].length; j++) {
      data.push(
        <div className={classes.lii}>
          <Link to={props[`data${i + 1}`][1][j]}>
            <li className={classes.li}>
              <p className={classes.srno}>{j + 1}</p>
              <div className={classes.file}>
                <p className={classes.fileText}>
                  {props[`data${i + 1}`][0][j]}
                </p>

                <div className={classes.fileIcon}>
                  <FileDownloadOutlinedIcon />
                </div>
              </div>
            </li>
          </Link>
        </div>
      );
    }
    console.log(data);
    boxes.push(
      <div className={classes.bodyBox}>
        <div className={classes.bodyHead}>{props.names[i]}</div>
        <div className={classes.bodyBody}>
          <ul className={classes.ul}>{data}</ul>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.subjectBox} ref={props.reff}>
      <div className={classes.header}>
        <p>{props.subjectName}</p>
        <a
          href="https://ptu.ac.in/wp-content/uploads/2021/12/BTech-CSE-2021.pdf"
          target="__blank"
        >
          Syllabus
        </a>
      </div>
      <div className={classes.body}>{boxes}</div>
    </div>
  );
}
export default Box;
