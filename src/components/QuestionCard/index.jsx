// Importa os hooks useState e useEffect do React
import { useEffect, useState } from "react";
// Importa os estilos específicos do componente (CSS Modules)
import styles from "./QuestionCard.module.css";

// Define e exporta o componente QuestionCard
// Recebe duas props: 
// - question: objeto com a pergunta e opções
// - onAnswer: função chamada quando o usuário responde
export default function QuestionCard({ question, onAnswer }) {
  // Cria um estado chamado "time", inicializado com 0
  // "time" vai armazenar o tempo que o usuário passou nessa pergunta
  const [time, setTime] = useState(0);

  // useEffect é usado para criar um efeito colateral: o timer
  useEffect(() => {
    // Reseta o tempo quando a pergunta mudar
    setTime(0);
    // Define um intervalo que incrementa "time" a cada 1 segundo
    const timer = setInterval(() => setTime((t) => t + 1), 1000);

    // Retorna uma função de limpeza que limpa o timer quando o componente for desmontado
    return () => clearInterval(timer);
  }, [question]); // Array vazio significa que o efeito roda apenas uma vez, ao montar o componente

  return (
    <div className={styles.card}>
      {/* Mostra a pergunta */}
      <h2>{question.question}</h2>
      
      {/* Lista de opções de resposta */}
      <ul>
        {question.options.map((opt, i) => (
          <li key={i}>
            {/* Quando o usuário clica, chama onAnswer passando a opção e o tempo */}
            <button onClick={() => onAnswer(opt, time)}>{opt}</button>
          </li>
        ))}
      </ul>

      {/* Mostra o tempo que o usuário passou na pergunta */}
      <p className={styles.time}>⏱ Tempo: {time}s</p>
    </div>
  );
}
