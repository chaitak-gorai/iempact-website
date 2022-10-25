import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IEMPACT</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar/>
      <Hero/>
      <About/>

     

    
    </div>
  )
}
