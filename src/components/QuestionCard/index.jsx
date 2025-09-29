import { useEffect, useState } from "react";
import styles from "./QuestionCard.module.css";

export default function QuestionCard({ question, onAnswer }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.card}>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((opt, i) => (
          <li key={i}>
            <button onClick={() => onAnswer(opt, time)}>{opt}</button>
          </li>
        ))}
      </ul>
      <p>⏱ Tempo: {time}s</p>
    </div>
  );
}
