import { Context } from '../utils';

export const Expense = {
  createdBy: ({ id }, args, ctx: Context) => {
    return ctx.prisma.expense({ id }).createdBy();
  }
};
