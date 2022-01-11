import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function AllPosts() {

  const events = [
    {id: "max", name: "Event 1"}, 
    {id: "Amanda", name: "Event 2"}, 
    {id: "Romeo", name: "Event 3"}
  ];

  return (
    <div className={styles.container}>
      <h1> All Events </h1>
      <ul>
        {events.map( (client) => (
            <li key={client.id}> 

            <Link href={{
              pathname: '/events/[id]',
              query: {id: client.id},

            }}><a> {client.name}  </a></Link>
            
            </li>
          ))}
      </ul>
      <hr/>
      <Link href="/clients/Max"> Event 1  </Link>
      <Link href="/Romeo"> Event 2  </Link>
      <Link href="/Amanda"> Event 3  </Link>
    </div>
  )
}
