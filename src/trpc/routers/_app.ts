import { createTRPCRouter } from "../init";
import { categoriesRouter } from "@/modules/categories/server/procedures";

export const AppRouter = createTRPCRouter({
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof AppRouter;
