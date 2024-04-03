import { Request } from "express";

export interface CreateUser extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
}

declare global {
  namespace Express {
    interface Request{
      user: {
        id: any,
        name: string,
        email: string,
        verified: boolean,
        avatar?: string,
        followers: number,
        folowings: number,
      }
    }
  }
}

export interface VerifyEmailRequest extends Request {
  body: {
    userId: string;
    token: string;
  };
}
