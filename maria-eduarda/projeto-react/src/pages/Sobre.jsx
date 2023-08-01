import Header from "../components/Header"
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'

import sobre from '../assets/sobre.svg'
import maria from '../assets/maria-ef.jpg'

import styles from '../styles/pages/sobre.module.css'

const Sobre = () => {
  return (
    <main>
    <Header textTitle="Saiba mais sobre mim" image={sobre} />
    <section className={styles.container}>
        <div className={styles.sobreContainer}>
          <Subtitle content='Maria Eduarda, prazer!' />
          <img className={styles.imageSobre} src={maria} />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.paragraphSobre}>
            Sou de Recife, tenho 23 anos, sou ex estudante de nutrição e atualmente estou em transição de carreira para a área de tecnologia.
            <br />
            <br />
            Atualmente, estou participando do meu segundo bootcamp, o de Fundamentos AWS na Escola da Nuvem, sendo o primeiro o de Front-End da Reprograma.
            <br />
            <br />
            Nas horas vagas, gosto de assistir filmes e séries, estar com as pessoas que amo e meus bichinhos. ♡
          </p>
        </div>
      </section>
    </main>
  )
}

export default Sobre