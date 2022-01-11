import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getFeaturedEvents } from './dummyData'; 

export default function Home() {

  const FeaturedEvents = getFeaturedEvents(); 

  return (
    <div className={styles.container}>
      <h1> Contact Page </h1>

      <ul>
       
      </ul>


    </div>
  )
}
