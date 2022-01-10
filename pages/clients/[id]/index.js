
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function ClientProjects() {
  const router = useRouter(); 

    console.log(' router.query '); 

    function loadProjectHandler(){
      console.log(' clicked -  loadProjectHandler');
    }

  return (
    <div className={styles.container}>
      <h1> All projects of a given  Client  </h1>

      <button onClick={loadProjectHandler}>Load a project  A </button>
    </div>
  )
}
