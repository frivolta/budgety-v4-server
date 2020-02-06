import { getUserId, Context } from '../../utils';

export const expense = {
  async createExpense(parent, { type, description, date, amount }, ctx: Context, info) {
    const userId = getUserId(ctx);
    return ctx.prisma.createExpense({
      type,
      description,
      date,
      amount,
      createdBy: {
        connect: { id: userId }
      }
    });
  }
};
