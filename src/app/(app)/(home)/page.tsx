"use client";

import { trpc } from "@/trpc/client";

export default function Home() {
  const { data } = trpc.auth.session.useQuery();

  return <div>{JSON.stringify(data?.user, null, 2)}</div>;

  // const categories = trpc.categories.getMany.useQuery();

  // return (
  //   <div>
  //     <p>Is loading: {`${categories.isLoading}`}</p>
  //     {JSON.stringify(categories.data, null, 2)}
  //   </div>
  // );
}
