import React from 'react';
import styles from "./ScoreBoard.module.css";

function ScoreBoard({ score, time, correctAnswers, total, onRestart }) {
  return (
    <div className={styles.scoreboard}>
      <h2 className={styles.title}>Resultado Final</h2>

      <div className={styles.stats}>
        <div className={styles.statBox}>Pontuação Final: {score}</div>
        <div className={styles.statBox}>Menor Tempo: {time}</div>
        <div className={styles.statBox}>
          Acertos: {correctAnswers} ({((correctAnswers/total)*100).toFixed(0)}%)
        </div>
      </div>

      <button className={styles.restartBtn} onClick={onRestart}>
        Reiniciar Quiz
      </button>
    </div>
  );
}

export default ScoreBoard;
