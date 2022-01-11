import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
// import { getFeaturedPosts } from '../lib/posts-util';

const DUMMY_POSTS = [
  {slug: 'getting-started', title: 'the title', image: 'getting-started-with-nextjs.png', excerpt:'234', date: ' 2022-02-10' },
  {slug: 'getting-started', title: 'the title', image: 'getting-started-with-nextjs.png', excerpt:'234', date: ' 2022-02-10' },
  {slug: 'getting-started', title: 'the title', image: 'getting-started-with-nextjs.png', excerpt:'234', date: ' 2022-02-10' },
  {slug: 'getting-started', title: 'the title', image: 'getting-started-with-nextjs.png', excerpt:'234', date: ' 2022-02-10' },
  {slug: 'getting-started', title: 'the title', image: 'getting-started-with-nextjs.png', excerpt:'234', date: ' 2022-02-10' }
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
