"use client";

import { cn } from "@/lib/utils";
import { useProductFilters } from "@/modules/products/hooks/use-product-filters";
import { Button } from "@/components/ui/button";

export const ProductSort = () => {
  const [filter, setFilter] = useProductFilters();

  return (
    <div className='flex items-center gap-2'>
      <Button
        className={cn(
          "rounded-full bg-white hover:bg-white",
          filter.sort !== "curated" &&
            "bg-transparent border-transparent hover:border-border hover:bg-transparent"
        )}
        size='sm'
        variant='secondary'
        onClick={() => setFilter({ sort: "curated" })}
      >
        Curated
      </Button>
      <Button
        className={cn(
          "rounded-full bg-white hover:bg-white",
          filter.sort !== "trending" &&
            "bg-transparent border-transparent hover:border-border hover:bg-transparent"
        )}
        size='sm'
        variant='secondary'
        onClick={() => setFilter({ sort: "trending" })}
      >
        Trending
      </Button>
      <Button
        className={cn(
          "rounded-full bg-white hover:bg-white",
          filter.sort !== "hot_and_new" &&
            "bg-transparent border-transparent hover:border-border hover:bg-transparent"
        )}
        size='sm'
        variant='secondary'
        onClick={() => setFilter({ sort: "hot_and_new" })}
      >
        Hot & New
      </Button>
    </div>
  );
};
