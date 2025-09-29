import React, { useState, useEffect } from 'react';
import './QuestionCard.module.css';
import '../../data/questions.js'

function QuestionCard({ question, timeSpent, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);
    }
  };

  return (
    <div className="question-card">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="answer"
              value={option}
              onChange={handleAnswerChange}
            />
            {option}
          </label>
        ))}
      </div>
      <div className="timer">Tempo: {timeSpent} segundos</div>
      <button onClick={handleSubmit}>Avançar</button>
    </div>
  );
}

export default QuestionCard;
