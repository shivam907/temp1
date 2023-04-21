import React from "react";
import classes from "./testimonial.module.css";
import image from "./WhatsApp Image 2023-04-10 at 21.34.12.jpg";
function Testimonial() {
  return (
    <div class={classes["testimonial-container"]}>
      <h2 class={classes["testimonial-heading"]}>
        <span class={classes["spl-head"]}>Happy costumers</span>
        are our true health
      </h2>
      <div class={classes["testimonial-box"]}>
        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>

        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>

        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>

        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>

        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>
      </div>

      <div class={`${classes["testimonial-box"]} ${classes["testi-box-2"]}`}>
        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>

        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>

        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>

        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>

        <div class={classes["testi-box"]}>
          <p class={classes["testi-para"]}>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quam ut quidem quae consectetur quos omnis, est ab dignissimos totam
            eveniet tempore voluptatem."
          </p>
          <div class={classes["person-info-box"]}>
            <div class={classes["person-info"]}>
              <img class={classes["img-testi"]} src={image} alt="image" />
              <div class={classes["person-detail"]}>
                <p class={classes["testi-name"]}>Shreya Sharma</p>
                <p class={classes["faded-info"]}>App store review</p>
              </div>
            </div>
            <div class={classes["icon-box"]}>
              {/* <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon>
              <ion-icon class="icon-star" name="star"></ion-icon> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
