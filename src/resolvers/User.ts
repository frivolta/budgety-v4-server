import { Context } from '../utils';

export const User = {
  posts: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).posts();
  },
  expenses: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).expenses();
  }
};
