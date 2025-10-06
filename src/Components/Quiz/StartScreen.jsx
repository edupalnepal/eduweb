import styles from "./StartScreen.module.css";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className={styles.start}>
      <h2>Welcome to the Edupal Quiz !</h2>
      <h3>{numQuestions} questions to test your GK</h3>
      <button
        className={`${styles.startBtn} ${styles.startPosition}`}
        onClick={() => dispatch({ type: "start" })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}

export default StartScreen;
