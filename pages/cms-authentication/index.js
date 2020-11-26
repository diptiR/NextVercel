function Blog({ posts }) {
  return (
    <div>
      <div>Data from API:</div>
      {posts}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://2bxd69w7-dev.preview.zesty.io/-/custom/services?token=12345678`);
  const posts = await res.text();

  return {
    props: {
      posts
    },
    revalidate: 1
  };
}

export default Blog;
