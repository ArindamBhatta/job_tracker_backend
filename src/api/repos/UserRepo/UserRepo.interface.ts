import { User } from "src/api/entities";

export default interface IUserRepo {
  createUser: (payload: ICreateUserRepoParams) => unknown;
  getUser: (payload: IGetUserRepoParams) => unknown;
}

export interface ICreateUserRepoParams {
  user: User;
}

export interface IGetUserRepoParams {
  email: string;
}
