import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import ScoreBoard from './components/ScoreBoard';
import questions from './data/questions';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    let timer;
    if (!quizFinished && currentQuestionIndex < questions.length) {
      timer = setInterval(() => {
        setTimeSpent((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentQuestionIndex, quizFinished]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeSpent(0);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="app">
      <Header />
      {!quizFinished ? (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          timeSpent={timeSpent}
          onAnswer={handleAnswer}
        />
      ) : (
        <ScoreBoard answers={answers} timeSpent={timeSpent} />
      )}
    </div>
  );
}

export default App;

