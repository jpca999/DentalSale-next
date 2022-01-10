import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useRouter, withRouter } from 'next/router';


export default function BlogPostsPage() {
    const router = useRouter ();

    console.log('11  slug- router =', router );
    console.log('11 slug- router query =', router.query  );

  return (
    <div className={styles.container}>
      <h1> Single Blog  Page  All routes Catcher  like - 3000/blog/23/234234  {router.query.id} </h1>

    </div>
  )
}
