import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Events from '../components/Events/Events'
import Dates from '../components/Dates/Dates'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IEMPACT</title>
        <meta name='description' content='IEMPACT, the Annual Cultural Fest of IEM, is back with its 32nd edition after 2 years of online lives- education, events. As the Annual Cultural Fest of IEM, Saltlake we bring to you dance, music, football, quiz, debate, art and most importantly Hope and Joy.' />
        <link rel='icon' href='/favicon.ico' />
        <link href="https://fonts.googleapis.com/css2?family=Changa:wght@300;400&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Dates/>
      <Events/>
      <Footer/>
    </div>
  )
}
