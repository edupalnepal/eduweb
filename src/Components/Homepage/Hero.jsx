import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles["section-hero"]} id="hero">
      <div className={styles["hero"]}>
        <div className={styles["hero-text-box"]}>
          <h1 className="heading-primary">
            <span>Sudurpaschim&apos;s</span> Top Educational Institute
          </h1>
          <p className={styles["hero-description"]}>
            Edupalnepal is dedicated to providing the best education resources
            for students. Our courses are designed to help you excel in your
            studies and achieve your goals.
          </p>

          <div className={styles["hero-btns"]}>
            <a href="#cta" className="btn btn--full margin-right-sm">
              Enroll Now
            </a>
            <a href="#our-courses" className="btn btn--outline">
              Learn more &darr;
            </a>
          </div>
        </div>

        <div className={styles["hero-img-box"]}>
          <img
            src="./edupal-hero.png"
            className={styles["hero-img"]}
            alt="Special Moments of achievement"
          />
        </div>

        <div className={styles["success-story"]}>
          <div className={styles["student-imgs"]}>
            <img
              src="./Students/student-1.png"
              alt="Top students of Edupalnepal"
            />
            <img
              src="./Students/student-2.png"
              alt="Top students of Edupalnepal"
            />
            <img
              src="./Students\student-3.png"
              alt="Top students of Edupalnepal"
            />
            <img
              src="./Students/student-4.png"
              alt="Top students of Edupalnepal"
            />
            <img
              src="./Students/student-5.png"
              alt="Top students of Edupalnepal"
            />
            <img
              src="./Students/student-6.png"
              alt="Top students of Edupalnepal"
            />
          </div>
          <p className={styles["students-text"]}>
            <span>Thousand&apos;s</span> of success stories !
          </p>
        </div>
      </div>
    </section>
  );
}
