import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles["section-hero"]} id="hero" aria-labelledby="hero-heading">
      <div className={styles["hero"]}>
        <div className={styles["hero-text-box"]}>
          <h1 className="heading-primary" id="hero-heading">
            <span>Dhangadhi&apos;s</span> Best Institute for Loksewa, Korean Language &amp; Banking Preparation
          </h1>
          <p className={styles["hero-description"]}>
            <strong>Edupalnepal</strong> is Sudurpaschim&apos;s top-rated institute for 
            <strong> Loksewa preparation</strong>, <strong>Korean language classes</strong>, 
            and <strong>Banking exam coaching</strong>. We offer expert training for 
            Nasu, Kharidaar, TSC, IELTS, Japanese Language, Nepal Police &amp; Army preparation 
            with proven success rates.
          </p>

          <div className={styles["hero-btns"]}>
            <a href="#cta" className="btn btn--full margin-right-sm" onClick={(e) => scrollToSection(e, "cta")}>
              Enroll Now
            </a>
            <a href="#our-courses" className="btn btn--outline" onClick={(e) => scrollToSection(e, "our-courses")}>
              View Courses &darr;
            </a>
          </div>
        </div>

        <div className={styles["hero-img-box"]}>
          <img
            src="edupal-hero.png"
            className={styles["hero-img"]}
            alt="Edupalnepal students celebrating success in Loksewa and language exams in Dhangadhi"
          />
        </div>

        <div className={styles["success-story"]}>
          <div className={styles["student-imgs"]}>
            <img
              src="Students/student-1.png"
              alt="Successful Loksewa student from Edupalnepal Dhangadhi"
            />
            <img
              src="Students/student-2.png"
              alt="Korean language course graduate from Edupalnepal"
            />
            <img
              src="Students/student-3.png"
              alt="Banking exam success story from Edupalnepal"
            />
            <img
              src="Students/student-4.png"
              alt="TSC preparation success from Edupalnepal Dhangadhi"
            />
            <img
              src="Students/student-5.png"
              alt="IELTS high scorer from Edupalnepal"
            />
            <img
              src="Students/student-6.png"
              alt="Nepal Police exam success from Edupalnepal"
            />
          </div>
          <p className={styles["students-text"]}>
            <span>1000+</span> successful students!
          </p>
        </div>
      </div>
    </section>
  );
}

