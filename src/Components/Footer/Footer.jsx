import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <div class={classes["footer"]}>
      <div class={classes["copyright"]}>
        <p>Copyright © 2023 SyncU pvt ltd</p>
      </div>
    </div>
  );
}
export default Footer;
