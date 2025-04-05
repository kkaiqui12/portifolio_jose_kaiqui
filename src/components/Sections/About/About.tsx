import React from 'react';
import styles from './About.module.css';

export default function About() {
  const videoId = "SEU_VIDEO_ID" // Substitua pelo ID do seu vídeo
    return (
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.videoWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=1`}
              title="Apresentação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            ></iframe>
          </div>
          
          <div className={styles.presentation}>
            <h1>Olá, eu sou [Seu Nome]</h1>
            <p>Desenvolvedor Full Stack</p>
            <div className={styles.description}>
              <p>Sou apaixonado por criar soluções tecnológicas inovadoras</p>
              <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
              <p>+5 anos de experiência em projetos complexos</p>
            </div>
          </div>
        </div>
      </section>
    )

}