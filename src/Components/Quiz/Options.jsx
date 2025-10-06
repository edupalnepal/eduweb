import styles from "./Options.module.css";

function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className={styles.options}>
      {questions.options.map((opt, index) => (
        <button
          key={opt}
          className={`${styles.quizBtn} ${styles.btnOption} ${
            index === answer ? styles.answer : ""
          } ${
            hasAnswered
              ? index === questions.correctOption
                ? styles.correct
                : styles.wrong
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
              points: questions.points,
            })
          }
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
