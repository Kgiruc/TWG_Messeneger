import { User } from "./User";

export interface Message {
    id: string;
    body: string;
    insertedAt: string;
    user: User
}