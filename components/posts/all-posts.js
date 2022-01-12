import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';



function AllPosts(props) {
  console.log(' All Posts - new comp props = ', props); 
  return (
    <section className={classes.posts}>
      <h1>All Posts - new comp</h1>
      {/* <PostsGrid posts={props.posts} /> */}
    </section>
  );
}

export default AllPosts;
