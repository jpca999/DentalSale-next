import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Clients() {

  const clients = [
    {id: "max", name: "MAx Million"}, 
    {id: "Amanda", name: "Amanda Million"}, 
    {id: "Romeo", name: "Romeo Million"}
  ];

  return (
    <div className={styles.container}>
      <h1> Clients Page</h1>
      <ul>
        {clients.map( (client) => (
            <li key={client.id}> 
  
            {/* <Link href={`/clients/${client.id}`}><a> {client.name}  </a></Link> */}

            <Link href={{
              pathname: '/clients/[id]',
              query: {id: client.id},

            }}><a> {client.name}  </a></Link>
            
            </li>
          ))}
      </ul>
      <hr/>
      <Link href="/clients/Max"> Max  </Link>
      <Link href="/Romeo"> Romeo  </Link>
      <Link href="/Amanda"> Amanda  </Link>
    </div>
  )
}
