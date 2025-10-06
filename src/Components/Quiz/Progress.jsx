import styles from "./Progress.module.css";

function Progress({ index, numQuestions, points, maxPossibelPoints, answer }) {
  return (
    <header className={styles.progress}>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>

      <p>
        <strong>
          points:{points}/{maxPossibelPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
