import { useState } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import questions from "./data/questions";
import styles from "./App.module.css";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[current].answer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
  };

  return (
    <div className={styles.app}>
      <Header />
      {current < questions.length ? (
        <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
      ) : (
        <ScoreBoard score={score} total={questions.length} onRestart={handleRestart} />
      )}
    </div>
  );
}
