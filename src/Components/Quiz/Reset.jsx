import styles from "./Reset.module.css";

function Reset({ dispatch }) {
  return (
    <button
      className={`${styles.resetBtn} ${styles.resetPosition}`}
      onClick={() => dispatch({ type: "reset" })}
    >
      Reset
    </button>
  );
}

export default Reset;
