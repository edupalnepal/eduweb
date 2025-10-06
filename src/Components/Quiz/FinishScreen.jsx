import styles from "./FinishScreen.module.css";

function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className={styles.result}>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)})%
      </p>

      <button
        className={`${styles.finishBtn} ${styles.finishPosition}`}
        onClick={() => dispatch({ type: "restart" })}
      >
        Try Again
      </button>
    </>
  );
}

export default FinishScreen;
