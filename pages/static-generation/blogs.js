import Link from 'next/link'

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
            <Link href={`${post.id}`}>
                <a>{post.title}</a>
            </Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    }
  };
}

export default Blog;
