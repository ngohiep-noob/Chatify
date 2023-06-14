import { Message } from "./Chat";

export type User = {
  id?: string;
  username?: string;
  email?: string;
  fullName?: string;
  role?: string;
  isOnline?: boolean;
};

export type RoomItem = {
  id: string;
  name: string;
  desc: string;
  lastMessage: Message;
};
