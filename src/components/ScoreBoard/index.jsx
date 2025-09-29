import styles from "./ScoreBoard.module.css";

export default function ScoreBoard({ score, total }) {
  return (
    <div className={styles.score}>
      <h2>Resultado Final</h2>
      <p>Você acertou {score} de {total} questões 🎉</p>
    </div>
  );
}
