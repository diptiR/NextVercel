import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ShoppingCart() {
  const { data, error } = useSWR("/api/post", fetcher);

  if (error) return <div>failed to load</div>;
  console.log(data);
  if (!data) return <div>loading...</div>;
  return <div>Data: {JSON.stringify(data.data)}</div>;
}

export default function StaticClientGeneration(){
  return (
    <div>
      <h1>Static Client Generation</h1>
      <ShoppingCart></ShoppingCart>
    </div>
  )
}