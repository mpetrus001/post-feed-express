import { AuthenticationError } from "apollo-server-express";
import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";

export const requireAuth: MiddlewareFn<MyContext> = async (
  { context: { req } },
  next
) => {
  if (!req.session.userId)
    throw new AuthenticationError(
      "session must be authenticated to access this resource"
    );
  return next();
};
