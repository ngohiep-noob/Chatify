export enum MenuItemType {
  USER = "user",
  GROUP = "group",
}

export interface MenuItem {
  id: string;
  name: string;
  type: MenuItemType;
  lastMessage: string;
  lastMessageTime: string;
  lastChattingUsername: string;
}
