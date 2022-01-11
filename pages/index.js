import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
// import { getFeaturedPosts } from '../lib/posts-util';

const DUMMY_POSTS = [
  {slug: 'next', title: 'the title', image: 'nextjs.png', excerpt:'234 first block', date: ' 2022-02-10' },
  // {slug: 'getting-started-nextjs2', title: 'the title 2', image: 'getting-started-nextjs.png', excerpt:'234', date: ' 2022-02-10' },
  // {slug: 'getting-started-nextjs3', title: 'the title 3', image: 'getting-started-nextjs.png', excerpt:'234', date: ' 2022-02-10' },
  // {slug: 'getting-started-nextjs4', title: 'the title 4', image: 'getting-started-nextjs.png', excerpt:'234', date: ' 2022-02-10' },
  // {slug: 'getting-started-nextjs5', title: 'the title', image: 'getting-started-nextjs.png', excerpt:'234', date: ' 2022-02-10' }
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Jay' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      {/* <FeaturedPosts posts={props.posts} /> */}
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export function getStaticProps() {
  // const featuredPosts = getFeaturedPosts();

  return {
    props: {
      // posts: featuredPosts,
    },
  };
}

export default HomePage;
