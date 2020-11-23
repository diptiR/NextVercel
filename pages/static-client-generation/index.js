import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ShoppingCart() {
  // fetchAPI is the function to do data fetching
  const { data, error } = useSWR("/api/post", fetcher);

  if (error) return <div>failed to load</div>;
  console.log(data);
  if (!data) return <div>loading...</div>;
  return <div>Items in Cart: {JSON.stringify(data.data)}</div>;
}
