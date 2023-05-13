import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <div class={classes["footer"]}>
      <footer class={classes["section-footer"]}>
        <nav class={classes["foot-company"]}>
          <h3 class={classes["heading-footer"]}>About Us</h3>
          <ul class={classes["ul-footer"]}>
            <li>
              <a class={classes["link-list"]} href="/">
                Why Us?
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Properties
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Services
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Community Impact
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Press
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Real Estate News
              </a>
            </li>
          </ul>
        </nav>

        <nav class={classes["foot-company"]}>
          <h3 class={classes["heading-footer"]}>Blog</h3>
          <ul class={classes["ul-footer"]}>
            <li>
              <a class={classes["link-list"]} href="/">
                Company
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Leadership
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Diversity
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Carrier With Us
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Feedback
              </a>{" "}
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Report a problem
              </a>{" "}
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Testimonial
              </a>{" "}
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Privacy Policy
              </a>{" "}
            </li>
          </ul>
        </nav>

        <nav class={classes["foot-company"]}>
          <h3 class={classes["heading-footer"]}>Support</h3>
          <ul class={classes["ul-footer"]}>
            <li>
              <a class={classes["link-list"]} href="/">
                Privacy Policies
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Safety Guide
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Report a Issue
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Help-Center
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Management
              </a>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Paisabazaar.com
              </a>{" "}
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Paisabazaar.com
              </a>{" "}
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Paisabazaar.com
              </a>{" "}
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Executive Talk
              </a>{" "}
            </li>
          </ul>
        </nav>

        <nav class={classes["foot-company"]}>
          <h3 class={classes["heading-footer"]}>Contact Us</h3>
          <ul class={classes["ul-footer"]}>
            <li>
              <p class={classes["foot-para"]}>Toll Free -</p>
              <a class={classes["link-list"]} href="/">
                {" "}
                89689 69929
              </a>
            </li>
            <li>
              <p class={classes["foot-para"]}>Email -</p>
              <a class={classes["link-list"]} href="/">
                syncu907@gmail.com{" "}
              </a>
            </li>
            <li>
              <p class={classes["foot-para"]}>Connect with us</p>
              <div class="icon-container">
                {/* <ion-icon class="icon-footer" name="logo-facebook"></ion-icon>
                <ion-icon class="icon-footer" name="logo-youtube"></ion-icon>
                <ion-icon class="icon-footer" name="logo-instagram"></ion-icon>
                <ion-icon class="icon-footer" name="logo-whatsapp"></ion-icon> */}
              </div>
            </li>
            <li>
              <a class={classes["link-list"]} href="/">
                Terms and Conditions{" "}
              </a>
            </li>
          </ul>
        </nav>
      </footer>
      <div class={classes["copyright"]}>
        <p>Copyright © 2023 SyncU pvt ltd</p>
      </div>
    </div>
  );
}
export default Footer;
