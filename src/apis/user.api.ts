import axios from "axios";
import { RoomItem } from "../types/User";
import { getToken } from "../utils/token.utils";

type GetRoomResponse = {
  data: RoomItem[];
  message: string;
  status: string;
};

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
