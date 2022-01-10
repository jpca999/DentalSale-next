import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useRouter, withRouter } from 'next/router';


export default function SingleBlogPage() {
    const router = useRouter ();

    console.log('11- router =', router );
    console.log('11- router query =', router.query  );

  return (
    <div className={styles.container}>
      <h1> Single Blog  Page  {router.query.id} </h1>

    </div>
  )
}
