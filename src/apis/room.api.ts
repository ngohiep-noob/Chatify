import axios from "axios";
import { getToken } from "../utils/token.utils";
import { RoomItem, User } from "../types/User";
import { SERVER_URL } from "./constant";

export type GetRoomResponse = {
  data: RoomItem[];
  message: string;
  status: string;
};

export type CreateRoomRequest = {
  name: string;
  desc: string;
  memberNames: string[];
};

export type JoinRoomRequest = {
  roomId: string | undefined;
  usernames: string[];
};

export const getRoomList = async (): Promise<GetRoomResponse> => {
  const token = getToken();

  const response = await axios.get<GetRoomResponse>(
    `${SERVER_URL}/users/rooms`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const CreateRoom = async (req: CreateRoomRequest) => {
  const token = getToken();

  const response = await axios.post(`${SERVER_URL}/room`, req, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const JoinRoom = async (req: JoinRoomRequest) => {
  const token = getToken();

  const response = await axios.post(`${SERVER_URL}/room/add-users`, req, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

type GetMemberListResponse = {
  data: User[];
  message: string;
};

export const GetMemberList = async (id: string) => {
  const token = getToken();

  const response = await axios.get<GetMemberListResponse>(
    `${SERVER_URL}/room/user-list/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
