import styles from "./NextButton.module.css";

function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        className={`${styles.nextBtn} ${styles.nextPosition}`}
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className={`${styles.nextBtn} ${styles.nextPosition}`}
        onClick={() => dispatch({ type: "completed" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
