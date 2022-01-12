import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import styles from '../../styles/Home.module.css'

const DUMMY_POSTS = [
  { slug: 'next', title: 'the title', image: 'nextjs.png', excerpt:'234 first block', date: ' 2022-02-10' },
  { slug: 'next2', title: 'the title', image: 'nextjs.png', excerpt:'234 first block', date: ' 2022-02-10' },
  { slug: 'next3', title: 'the title', image: 'nextjs.png', excerpt:'234 first block', date: ' 2022-02-10' },
  { slug: 'next', title: 'the title', image: 'nextjs.png', excerpt:'234 first block', date: ' 2022-02-10' },
  { slug: 'next5', title: 'the title', image: 'nextjs.png', excerpt:'234 first block', date: ' 2022-02-10' }
];


export default function AllPostsPage() {
  
  return (<Fragment>
        <AllPosts posts={DUMMY_POSTS} />
  </Fragment>
  );
}
