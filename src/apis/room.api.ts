import axios from "axios";
import { getToken } from "../utils/token.utils";
import { RoomItem } from "../types/User";

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

export type JoinRoomRequest={
  roomId: string| undefined;
  usernames: string[]
}


export const getRoomList = async (): Promise<GetRoomResponse> => {
  const token = getToken();

  const response = await axios.get<GetRoomResponse>(
    "http://localhost:8888/users/rooms",
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

  const response = await axios.post("http://localhost:8888/room", req, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const JoinRoomAdd=async (req: JoinRoomRequest) => {
  const token = getToken();

  const response = await axios.post("http://localhost:8888/room/add-users", req, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
