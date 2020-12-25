import { MyContext } from "src/types";
import { MiddlewareFn } from "type-graphql";

export const requireAuth: MiddlewareFn<MyContext> = async (
  { context: { req } },
  next
) => {
  if (!req.session.userId) throw new Error("not authenticated");
  return next();
};