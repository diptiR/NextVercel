export async function getServerSideProps() {
    const response = await fetch(
      "https://2bxd69w7-dev.preview.zesty.io/-/custom/services?token=12345678"
    );
    const posts = await response.text();
    return { props: { data: posts } };
  }
  
  const name = ({ data }) => <div>{data}</div>;
  
  export default name;
  