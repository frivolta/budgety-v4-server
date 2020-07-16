import { Context } from "../utils";

export const Profile = {
  createdBy: ({ id }, args, ctx: Context) => {
    return ctx.prisma.profile({ id }).createdBy();
  },
};
