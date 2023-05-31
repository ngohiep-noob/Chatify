import axios from "axios";
import { RoomItem,User } from "../types/User";

type GetRoomResponse = {
  data: RoomItem[];
  message: string;
  status: string;
};

export const getRoomList = async (): Promise<RoomItem[]> => {
  // const token = localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsInN1YiI6InVzZXIyIiwiaWF0IjoxNjg1NTQ5MjcxLCJleHAiOjE2ODU1NjAwNzF9.09-V_uTrKDwAsGpMYdNMUEn4JfEV-2nZPXsVCTFuiLA";

  const response = await axios.get<GetRoomResponse>(
    "http://localhost:8888/users/rooms",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.data;
};
type GetUserInfor= {
  data: User;
  message: string;
  status: string;
};
export const getUserInfor = async(): Promise<User> => {
  const token= localStorage.getItem('token');
  const response = await axios.get<GetUserInfor>(
    "http://localhost:8888/users/rooms",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};
