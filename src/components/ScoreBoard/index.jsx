import React from 'react';
import './ScoreBoard.module.css';

function ScoreBoard({ answers, timeSpent }) {
  return (
    <div className="scoreboard">
      <h2>Quiz Finalizado</h2>
      <p>Tempo total: {timeSpent} segundos</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            Pergunta {index + 1}: {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreBoard;
