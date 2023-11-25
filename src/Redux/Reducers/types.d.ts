import {IUser} from './API/actions';

interface TMongoCommon {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface TData {
  data: object;
  basket: any;
}
export type TAuth = {
  isLoggedIn: boolean;
  user: IUser | null;
  token: string | null;
};

export type TCallback<T> = (args: T) => void;

export interface ICommonResponse {
  success: boolean;
  message: string;
}
