export enum MenuItemType {
  USER = "user",
  GROUP = "group",
}

export interface MenuItem {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  lastChattingUsername: string;
}
