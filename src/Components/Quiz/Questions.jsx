import Options from "./Options";
import styles from "./Questions.module.css";

function Questions({ questions, dispatch, answer }) {
  return (
    <div className={styles.questions}>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
