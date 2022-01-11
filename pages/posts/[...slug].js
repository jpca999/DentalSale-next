import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import  { useRouter } from 'next/router';


export default function PostSlugPage () {

    const router = useRouter(); 

    console.log( ' router.query =', router.query );


  return (
    <div className={styles.container}>
      <h1>  Post Slug Page (slug)   {router.query.id} </h1>

    
    </div>
  )
}
