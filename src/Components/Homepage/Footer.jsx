import logo from "../../edupal-logo.png";
import styles from "./Footer.module.css";

export default function footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={`container grid ${styles["grid--footer"]}`}>
        <div className={styles["logo-col"]}>
          <div className={styles["logo-link"]}>
            <a href="#home" className={styles["footer-logo"]}>
              <img
                className={styles["logo"]}
                alt="Edupalnepal logo"
                src={logo}
              />
            </a>

            <ul className={styles["social-links"]}>
              <li>
                <a
                  className={styles["footer-link"]}
                  href="https://www.facebook.com/edupalnepal"
                >
                  <ion-icon
                    class={styles["social-icon"]}
                    name="logo-facebook"
                  ></ion-icon>
                </a>
              </li>

              <li>
                <a
                  className={styles["footer-link"]}
                  href="https://www.youtube.com/@edupalnepal"
                >
                  <ion-icon
                    class={styles["social-icon-yt"]}
                    name="logo-youtube"
                  ></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <p className={styles.copyright}>
            Copyright &copy;{" "}
            <span className={styles.year}>{new Date().getFullYear()}</span> by
            Edupalnepal PVT. LTD. All rights reserved.
          </p>
        </div>

        <div className={styles["address-col"]}>
          <p className={styles["footer-heading"]}>Contact us</p>
          <address className={styles.contacts}>
            <p className={styles.address}>
              Ratopool, Dhangadhi, Nepal - (Near Buspark)
            </p>
            <p>
              <a className={styles["footer-link"]} href="tel:091-523368">
                091-523368
              </a>
              <br />

              <a
                className={styles["footer-link"]}
                href="mailto:info@edupalnepal.com"
              >
                info@edupalnepal.com
              </a>
            </p>
          </address>
        </div>

        <nav className={styles["nav-col"]}>
          <p className={styles["footer-heading"]}>Company</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <a className={styles["footer-link"]} href="#hero">
                About Edupalnepal
              </a>
            </li>
            <li>
              <a
                className={styles["footer-link"]}
                href="mailto:info@edupalnepal.com"
              >
                For Business
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#cta">
                Careers
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
