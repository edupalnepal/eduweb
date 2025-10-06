import styles from "./OurCourses.module.css";

export default function ourCourses() {
  return (
    <section className={styles["section-courses"]} id="our-courses">
      <div className="container center-text">
        <p className="subheading">Our Courses</p>
        <h2 className="heading-secondary">Top Courses By Top Instructors</h2>
      </div>

      <div className="container courses-grid grid grid--3-cols margin-bottom-md">
        <div className={styles["courses"]}>
          <img
            src="./Courses-imgs/Courses-loksewa-100.jpg"
            alt="courses of edupalnepal"
            className={styles["course-img"]}
          />

          <div className={styles["courses-content"]}>
            <p className={styles["course-title"]}>Loksewa Tayari</p>
            <ul className={styles["course-list"]}>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                ></ion-icon>{" "}
                Na.su
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                ></ion-icon>{" "}
                Kharidaar
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                ></ion-icon>{" "}
                Sakha Adhikrit
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["courses"]}>
          <img
            src="./Courses-imgs/Courses-TSC-100.jpg"
            alt="courses of edupalnepal"
            className={styles["course-img"]}
          />

          <div className={styles["courses-content"]}>
            <p className={styles["course-title"]}>TSC Tayari</p>
            <ul className={styles["course-list"]}>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                ></ion-icon>{" "}
                Ma.Bi
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                ></ion-icon>{" "}
                Pra.Bi
              </li>
              <li className={styles["course-item"]}>
                <ion-icon
                  class={styles["right-icon"]}
                  name="caret-forward-outline"
                ></ion-icon>{" "}
                Ni.Ma.Bi
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["banking-course"]}>
          <div className={styles["courses"]}>
            <img
              src="./Courses-imgs/Courses-banking-100.jpg"
              alt="courses of edupalnepal"
              className={styles["course-img"]}
            />

            <div className={styles["courses-content"]}>
              <p className={styles["course-title"]}>Banking Tayari</p>
              <ul className={styles["course-list"]}>
                <li className={styles["course-item"]}>
                  <ion-icon
                    class={styles["right-icon"]}
                    name="caret-forward-outline"
                  ></ion-icon>
                  ADBL
                </li>
                <li className={styles["course-item"]}>
                  <ion-icon
                    class={styles["right-icon"]}
                    name="caret-forward-outline"
                  ></ion-icon>
                  NRB
                </li>
                <li className={styles["course-item"]}>
                  <ion-icon
                    class={styles["right-icon"]}
                    name="caret-forward-outline"
                  ></ion-icon>
                  NBL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["container"]} ${styles["more-courses"]}`}>
        <a href="#our-courses" className="link">
          More courses &rarr;
        </a>
      </div>
    </section>
  );
}
