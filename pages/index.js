import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment } from 'react'
import Hero from '../components/home-page/Hero'

export default function Home() {


  return (
     <Fragment>
       <Hero />
     </Fragment>

  )
}
