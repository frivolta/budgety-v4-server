import { getUserId, Context } from "../../utils";

export const profile = {
  async createProfile(
    parent,
    { accountName, accountBalance, monthlyBudget },
    ctx: Context,
    info
  ) {
    const userId = getUserId(ctx);
    return ctx.prisma.createProfile({
      isCompleted: true,
      accountName,
      accountBalance,
      monthlyBudget,
      createdBy: {
        connect: { id: userId },
      },
    });
  },
};
