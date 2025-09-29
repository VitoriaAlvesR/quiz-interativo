// Importa os estilos definidos no arquivo Header.module.css
// Esses estilos ficam isolados para esse componente (CSS Modules).
import styles from "./Header.module.css";

// Define e exporta o componente Header como padrão
export default function Header() {
  return (
    // Usa a classe "header" definida no Header.module.css 
    // para estilizar a tag <header>
    <header className={styles.header}>
      {/* Exibe o título principal do aplicativo */}
      <h1>Quiz Interativo</h1>
    </header>
  );
}
