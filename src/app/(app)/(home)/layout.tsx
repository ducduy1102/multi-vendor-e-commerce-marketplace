import { Category } from "@/payload-types";
import configPromise from "@payload-config";
import { getPayload } from "payload";

import Footer from "@/app/(app)/(home)/footer";
import Navbar from "@/app/(app)/(home)/navbar";
import { SearchFilter } from "@/app/(app)/(home)/search-filters";

interface Props {
  children: React.ReactNode;
}

// http://localhost:3000/admin

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });
  const data = await payload.find({
    collection: "categories",
    depth: 1, // Populate subcategories, subcategories.[0] will be a type of "Categories"
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });
  console.log("🚀 ~ Layout ~ data:", data);

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // Beacause of "depth:1" we are confident "doc" will be a type of "Categories"
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));

  console.log("🚀 ~ Layout ~ data:", formattedData);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <SearchFilter data={formattedData} />
      <div className='flex-1 bg-[#f4f4f0]'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
