import { useEffect } from "react";
import styles from "./Timer.module.css";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch, secondsRemaining]
  );

  return (
    <div className={styles.timer}>
      {mins < 10 && "0"}
      {mins}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
