import { initTRPC } from "@trpc/server";
const t = initTRPC.create();
const appRouter = t.router({});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
