import React from "react";
import classes from "./SubjectBox.module.css";
import Box from "./SubjectBox";
function SubjectBox() {
  return (
    <>
      <div className={classes.subjectBoxes}>
        <Box
          subjectName="Discrete Mathematics"
          number={4}
          names={[
            "notes",
            "books",
            "previous year question papers",
            "important topics",
          ]}
          data1={[
            [
              "CEC Module-1 Handwritten Notes",
              "CEC Module-2 Handwritten Notes",
              "CEC Module-3 Handwritten Notes",
              "CEC Module-4 Handwritten Notes",
              "CEC Module-5 Handwritten Notes",
              "CEC Module-6 Handwritten Notes",
              "CEC Module-7 Handwritten Notes",
              "CEC Module-8 Handwritten Notes",
            ],
            [
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
            ],
          ]}
          data2={[
            [
              "COE Module-1 Handwritten Notes",
              "COE Module-1 Handwritten Notes",
              "COE Module-1 Handwritten Notes",
              "COE Module-1 Handwritten Notes",
              "COE Module-1 Handwritten Notes",
              "COE Module-1 Handwritten Notes",
              "COE Module-1 Handwritten Notes",
              "COE Module-1 Handwritten Notes",
            ],
            [
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
            ],
          ]}
          data3={[
            [
              " Module-1 Handwritten Notes",
              " Module-1 Handwritten Notes",
              " Module-1 Handwritten Notes",
              " Module-1 Handwritten Notes",
              " Module-1 Handwritten Notes",
              " Module-1 Handwritten Notes",
              " Module-1 Handwritten Notes",
              " Module-1 Handwritten Notes",
            ],
            [
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
            ],
          ]}
          data4={[
            [
              "CEC Module-1 Handwritten Notes",
              "CEC Module-1 Handwritten Notes",
              "CEC Module-1 Handwritten Notes",
              "CEC Module-1 Handwritten Notes",
              "CEC Module-1 Handwritten Notes",
              "CEC Module-1 Handwritten Notes",
              "CEC Module-1 Handwritten Notes",
              "CEC Module-1 Handwritten Notes",
            ],
            [
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
              "https://shivamkaushal.in",
            ],
          ]}
        />
      </div>
    </>
  );
}

export default SubjectBox;
