import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Context } from "../../utils";
import { ERROR_MESSAGES } from "../../messages";

export const auth = {
  async signup(parent, args, ctx: Context) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.prisma.createUser({ ...args, password });
    const profile = await ctx.prisma.createProfile({
      accountBalance: "0",
      monthlyBudget: "0",
      isCompleted: false,
      accountName: "No Name",
      createdBy: {
        connect: { id: user.id },
      },
    });
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
      profile,
    };
  },

  async login(parent, { email, password }, ctx: Context) {
    const user = await ctx.prisma.user({ email });
    if (!user) {
      throw new Error(`${ERROR_MESSAGES.NO_USER_FOUND} ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(ERROR_MESSAGES.INVALID_PASSWORD);
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },
};
