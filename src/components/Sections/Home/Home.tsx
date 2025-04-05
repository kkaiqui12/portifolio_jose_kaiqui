import { useState } from 'react';
import styles from './Home.module.css';
import userImage from './user.svg';

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadCV = () => {
    setIsDownloading(true);
    
    try {
      const fileUrl = '/teste.pdf';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'teste.pdf';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
      window.open('/teste.pdf', '_blank');
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img 
            src={userImage}
            alt="User"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.presentation}>
          <h1 className={styles.presentationH1}>
            Olá, eu sou [Seu Nome]
          </h1>
          <p>Desenvolvedor Full Stack</p>
          <div className={styles.description}>
            <p>Sou apaixonado por criar soluções tecnológicas inovadoras</p>
            <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
            <p>+5 anos de experiência em projetos complexos</p>
          </div>
          <div className={styles.buttonsContainer}>
            <a href="./about" className={styles['demo-button']}>Sobre</a>
            <button 
              onClick={downloadCV} 
              className={styles['demo-button']}
              disabled={isDownloading}
            >
              {isDownloading ? 'Baixando...' : 'Baixar CV'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}