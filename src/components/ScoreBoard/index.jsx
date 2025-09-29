import styles from "./ScoreBoard.module.css";

export default function ScoreBoard({ score, total, stats, history, onRestart }) {
  return (
    <div className={styles.scoreboard}>
      <h2>Resultado Final</h2>

      {/* Estatísticas principais */}
      <div className={styles.stats}>
        <div className={styles.card}>Pontuação Final: {score}</div>
        <div className={styles.card}>Menor Tempo: {stats.minTime}</div>
        <div className={styles.card}>Acertos: {score} ({((score / total) * 100).toFixed(0)}%)</div>
      </div>

      {/* Botão reiniciar */}
      <button className={styles.restartBtn} onClick={onRestart}>
        Reiniciar Quiz
      </button>

      {/* Histórico das respostas */}
      <div className={styles.history}>
        {history.map((item, i) => (
          <div key={i} className={styles.questionBlock}>
            <p><strong>Pergunta:</strong> {item.question}</p>
            <p><strong>Sua Resposta:</strong> {item.userAnswer}</p>
            <p><strong>Resposta Correta:</strong> {item.correctAnswer}</p>
            <p><strong>Pontos:</strong> {item.isCorrect ? 1 : 0}</p>
            <p><strong>Tempo:</strong> {item.time}s</p>
            {item.isCorrect ? (
              <p className={styles.correct}>✔ Correta</p>
            ) : (
              <p className={styles.wrong}>✘ Errada</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
