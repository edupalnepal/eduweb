import styles from "./Header.module.css";
import icon from "../../edupal-logo.png";

function Header() {
  return (
    <header className={styles.appHeader}>
      <img src={icon} className={styles.logo} alt="React logo" />

      <h1>Edupal Quiz</h1>
    </header>
  );
}

export default Header;
