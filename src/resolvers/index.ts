import { Query } from './Query';
import { Subscription } from './Subscription';
import { auth } from './Mutation/auth';
import { post } from './Mutation/post';
import { expense } from './Mutation/expense';
import { User } from './User';
import { Post } from './Post';
import { Expense } from './Expense';

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...expense
  },
  Subscription,
  User,
  Post,
  Expense
};
