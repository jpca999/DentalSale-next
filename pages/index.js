import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1> Hello Dental Sale </h1>

      <ul>
        <li>
            <Link href="/portfolio"> Portfolio </Link>
        </li>
        <li>
        <Link href="/about"> About </Link>
        </li>
        <li>
        <Link href="/clients"> Clients </Link>
        </li>
      </ul>


    </div>
  )
}
