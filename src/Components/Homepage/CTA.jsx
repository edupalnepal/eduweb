import styles from "./CTA.module.css";

export default function cta() {
  return (
    <section className={styles["section-cta"]} id="cta">
      <div className="container">
        <div className={styles["cta-container"]}>
          <p className="subheading">Contact Now</p>
          <h2 className="heading-secondary">Contact us for Enquries</h2>
        </div>

        <div className={styles["cta-grid"]}>
          <div className={`container ${styles["call-container"]}`}>
            <div className={styles["call-now-container"]}>
              <ion-icon
                name="call-outline"
                class={styles["call-icon"]}
              ></ion-icon>
              <h3 className={styles["call-now"]}>Call Now </h3>
            </div>
            <a className={styles["call-number"]} href="tel:091-523368">
              091-523368
            </a>
          </div>

          <div className={`${styles.container} ${styles["or-container"]}`}>
            <h3>Or</h3>
          </div>

          <div className={styles["cta"]}>
            <h2 className={styles["heading-submit"]}>Submit form</h2>
            <form className={styles["cta-form"]} name="sign-up">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Your Name"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="your number"
                  name="phone"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  In What course would you like to enroll ?
                </label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Nasu</option>
                  <option value="youtube">Kharidaar</option>
                  <option value="podcast">Sakha Adhikrit</option>
                  <option value="ad">TSC</option>
                  <option value="others">Banking</option>
                  <option value="others">Nepal Army</option>
                  <option value="others">Nepal Police</option>
                  <option value="others">Korean Language</option>
                  <option value="others">Japanese Language</option>
                  <option value="others">IELTS</option>
                </select>
              </div>

              <button className={`btn ${styles["btn--form"]}`}>
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
