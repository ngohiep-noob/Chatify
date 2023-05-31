import axios from "axios";
import { RoomItem ,User} from "../types/User";

type GetRoomResponse = {
  data: RoomItem[];
  message: string;
  status: string;
};

export const getRoomList = async (): Promise<GetRoomResponse> => {
  // const token = localStorage.getItem("token");
  const token = localStorage.getItem('token');

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
type GetUserInfor= {
  data: User;
  message: string;
  status: string;
};
export const getUserInfor = async(): Promise<GetUserInfor> => {
  const token= localStorage.getItem('token');
  const response = await axios.get<GetUserInfor>(
    "http://localhost:8888/users/rooms",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
