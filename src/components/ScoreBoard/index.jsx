// Importa os estilos específicos do componente (CSS Modules)
import styles from "./ScoreBoard.module.css";

// Define e exporta o componente ScoreBoard
// Recebe como props:
// - score: pontuação final do usuário
// - total: total de perguntas
// - stats: estatísticas adicionais (ex: menor tempo)
// - history: histórico de respostas detalhado
// - onRestart: função para reiniciar o quiz
export default function ScoreBoard({ score, total, stats, history, onRestart }) {
  return (
    <div className={styles.scoreboard}>
      {/* Título do placar */}
      <h2>Resultado Final</h2>

      {/* Estatísticas principais */}
      <div className={styles.stats}>
        <div className={styles.card}>Pontuação Final: {score}</div>
        <div className={styles.card}>Menor Tempo: {stats.minTime}</div>
        {/* Mostra acertos em número e porcentagem */}
        <div className={styles.card}>
          Acertos: {score} ({((score / total) * 100).toFixed(0)}%)
        </div>
      </div>

      {/* Botão para reiniciar o quiz */}
      <button className={styles.restartBtn} onClick={onRestart}>
        Reiniciar Quiz
      </button>

      {/* Histórico detalhado das respostas */}
      <div className={styles.history}>
        {history.map((item, i) => (
          <div key={i} className={styles.questionBlock}>
            <p><strong>Pergunta:</strong> {item.question}</p>
            <p><strong>Sua Resposta:</strong> {item.userAnswer}</p>
            <p><strong>Resposta Correta:</strong> {item.correctAnswer}</p>
            <p><strong>Pontos:</strong> {item.isCorrect ? 1 : 0}</p>
            <p><strong>Tempo:</strong> {item.time}s</p>
            {/* Indica se a resposta foi correta ou errada */}
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
