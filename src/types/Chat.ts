import { User } from "./User";

export type Message = {
  message: string;
  user: User;
  createdAt: Date;
};

export type RoomChat = {
  id: string;
  name: string;
  desc: string;
  ownerId: string;
  createdAt: Date;
  chats: Message[];
};
