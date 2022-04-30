import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.ondeck.com">OnDeck VIP Manager!</a>
        </h1>

        <p className={styles.description}>
          Get started by adding new VIP 
        </p>
        <Form />

        <p className={styles.description}>
          <Link href="/members">
            <a>Peep our existing VIPs 👀</a>
          </Link>
        </p>
      
      </main>

      <Footer />
      
    </div>
  )
}
