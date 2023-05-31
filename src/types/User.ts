export type User = {
  id?: string;
  username?: string;
  email?: string;
  fullName?: string;
  role?: string;
  active?: boolean;
};

export type RoomItem = {
  id: string;
  name: string;
  desc: string;
  lastMessage: {
    message: string;
    user: User;
    createdAt: Date;
  };
};
