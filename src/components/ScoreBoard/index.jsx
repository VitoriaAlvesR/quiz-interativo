import styles from "./ScoreBoard.module.css";

export default function ScoreBoard({ score, total, onRestart }) {
  return (
    <div className={styles.score}>
      <h2>Resultado Final</h2>
      <p>Você acertou {score} de {total} questões 🎉</p>
      <button className={styles.btn} onClick={onRestart}>
        Voltar ao Início
      </button>
    </div>
  );
}
