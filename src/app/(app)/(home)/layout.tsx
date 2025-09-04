import Footer from "@/app/(app)/(home)/footer";
import Navbar from "@/app/(app)/(home)/navbar";
import {
  SearchFilter,
  SearchFiltersSkeleton,
} from "@/app/(app)/(home)/search-filters";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

// http://localhost:3000/admin

const Layout = async ({ children }: Props) => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<SearchFiltersSkeleton />}>
          <SearchFilter />
        </Suspense>
      </HydrationBoundary>
      <div className='flex-1 bg-[#f4f4f0]'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
