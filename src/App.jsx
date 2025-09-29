// Importa useState do React para controlar estados
import { useState } from "react";
// Importa os componentes do quiz
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
// Importa as perguntas do quiz
import questions from "./data/questions";
// Importa os estilos do App
import styles from "./App.module.css";

// Define e exporta o componente principal
export default function App() {
  // Estado do índice da pergunta atual
  const [current, setCurrent] = useState(0);
  // Estado da pontuação total
  const [score, setScore] = useState(0);
  // Estado do histórico de respostas detalhadas
  const [history, setHistory] = useState([]);
  // Estado para armazenar estatísticas, como o menor tempo
  const [stats, setStats] = useState({ minTime: null });

  // Função chamada quando o usuário responde uma pergunta
  const handleAnswer = (answer, time) => {
    const correctAnswer = questions[current].answer; // Resposta correta
    const isCorrect = answer === correctAnswer;       // Verifica se acertou

    // Se acertou, incrementa a pontuação
    if (isCorrect) {
      setScore(score + 1);
    }

    // Atualiza o histórico de respostas
    setHistory([
      ...history,
      {
        question: questions[current].question, // Pergunta
        userAnswer: answer,                     // Resposta do usuário
        correctAnswer,                          // Resposta correta
        time,                                   // Tempo gasto
        isCorrect,                              // Se acertou
      },
    ]);

    // Atualiza estatísticas (menor tempo)
    setStats((prev) => ({
      ...prev,
      minTime:
        prev.minTime === null || time < prev.minTime ? time : prev.minTime,
    }));

    // Passa para a próxima pergunta
    setCurrent(current + 1);
  };

  // Função para reiniciar o quiz
  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setHistory([]);
    setStats({ minTime: null });
  };

  return (
    <div className={styles.app}>
      {/* Cabeçalho */}
      <Header />

      {/* Mostra a pergunta atual ou, se acabou, o ScoreBoard */}
      {current < questions.length ? (
        <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
      ) : (
        <ScoreBoard
          score={score}                 // Pontuação final
          total={questions.length}      // Total de perguntas
          stats={stats}                 // Estatísticas (ex: menor tempo)
          history={history}             // Histórico detalhado
          onRestart={handleRestart}     // Função para reiniciar o quiz
        />
      )}
    </div>
  );
}
