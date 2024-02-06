import { Request } from "express";
import { UserModel } from "src/User/user.model";

export interface AuthRequest extends Request {
    user: UserModel
}