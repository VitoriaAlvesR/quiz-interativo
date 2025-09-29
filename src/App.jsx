import { useState } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import questions from "./data/questions";
import styles from "./App.module.css";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [stats, setStats] = useState({ minTime: null });

  const handleAnswer = (answer, time) => {
    const correctAnswer = questions[current].answer;
    const isCorrect = answer === correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setHistory([
      ...history,
      {
        question: questions[current].question,
        userAnswer: answer,
        correctAnswer,
        time,
        isCorrect,
      },
    ]);

    setStats((prev) => ({
      ...prev,
      minTime:
        prev.minTime === null || time < prev.minTime ? time : prev.minTime,
    }));

    setCurrent(current + 1);
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setHistory([]);
    setStats({ minTime: null });
  };

  return (
    <div className={styles.app}>
      <Header />
      {current < questions.length ? (
        <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
      ) : (
        <ScoreBoard
          score={score}
          total={questions.length}
          stats={stats}
          history={history}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
