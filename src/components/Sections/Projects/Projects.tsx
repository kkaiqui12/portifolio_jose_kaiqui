import styles from './Projects.module.css'; // Importação correta
import image from './my_portfolio.jpg'

const Projects = () => {
  return (
    <section className={styles['projects-container']}> {/* Acesse a classe via styles */}
      <div className={styles['project-card']}> 
        <div className={styles['card-image']}>
          <img 
            src={image} 
            alt="Preview do projeto"
          />
        </div>
        <div className={styles['card-content']}>
          <h3>🚀 Meu Portfólio Profissional</h3>
          <p>✅ Animação de digitação · Glassmorphism · Layout responsivo com CSS Grid</p>
          <p>✅ Cards 3D interativos · Filtragem dinâmica · Efeitos de parallax</p>
          <p>✅ Player de vídeo customizado · Timeline interativa · Progress bars de skills</p>
          <p>✅ Formulário funcional · Links sociais temáticos · Microinterações fluidas</p>
          <div className={styles['tech-tags']}>
            <span>🖥️ Stacks Utilizadas: </span>
            <span> React,</span>
            <span> TypeScript,</span>
            <span> CSS Modules</span>
          </div>
          <a href="#" className={styles['demo-button']}>Ver Demo</a>
        </div>
      </div>
      <div className={styles['project-card']}> 
        <div className={styles['card-image']}>
          <img 
            src={image} 
            alt="Preview do projeto"
          />
        </div>
        <div className={styles['card-content']}>
          <h3>🚀 Meu Portfólio Profissional</h3>
          <p>✅ Animação de digitação · Glassmorphism · Layout responsivo com CSS Grid</p>
          <p>✅ Cards 3D interativos · Filtragem dinâmica · Efeitos de parallax</p>
          <p>✅ Player de vídeo customizado · Timeline interativa · Progress bars de skills</p>
          <p>✅ Formulário funcional · Links sociais temáticos · Microinterações fluidas</p>
          <div className={styles['tech-tags']}>
            <span>🖥️ Stacks Utilizadas: </span>
            <span> React,</span>
            <span> TypeScript,</span>
            <span> CSS Modules</span>
          </div>
          <a href="#" className={styles['demo-button']}>Ver Demo</a>
        </div>
      </div>
      <div className={styles['project-card']}> 
        <div className={styles['card-image']}>
          <img 
            src={image} 
            alt="Preview do projeto"
          />
        </div>
        <div className={styles['card-content']}>
          <h3>🚀 Meu Portfólio Profissional</h3>
          <p>✅ Animação de digitação · Glassmorphism · Layout responsivo com CSS Grid</p>
          <p>✅ Cards 3D interativos · Filtragem dinâmica · Efeitos de parallax</p>
          <p>✅ Player de vídeo customizado · Timeline interativa · Progress bars de skills</p>
          <p>✅ Formulário funcional · Links sociais temáticos · Microinterações fluidas</p>
          <div className={styles['tech-tags']}>
            <span>🖥️ Stacks Utilizadas: </span>
            <span> React,</span>
            <span> TypeScript,</span>
            <span> CSS Modules</span>
          </div>
          <a href="#" className={styles['demo-button']}>Ver Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;