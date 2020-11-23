function Blog({ posts }) {
  return (
    <div>{posts}</div>
  );
}

export async function getStaticProps() {
  var baseUrl = "http://localhost:3000/"
  // Call an external API endpoint to get posts
  const res = await fetch(`https://2bxd69w7-dev.preview.zesty.io/-/custom/services?token=12345678`);
  const posts = await res.text();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      revalidate: 1
    }
  };
}

export default Blog;
