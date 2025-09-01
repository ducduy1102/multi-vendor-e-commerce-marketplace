import Footer from "@/app/(app)/(home)/footer";
import Navbar from "@/app/(app)/(home)/navbar";
import {
  SearchFilter,
  SearchFiltersSkeleton,
} from "@/app/(app)/(home)/search-filters";
import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

// http://localhost:3000/admin

const Layout = async ({ children }: Props) => {
  void trpc.categories.getMany.prefetch();

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <HydrateClient>
        <Suspense fallback={<SearchFiltersSkeleton />}>
          <SearchFilter />
        </Suspense>
      </HydrateClient>
      <div className='flex-1 bg-[#f4f4f0]'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
