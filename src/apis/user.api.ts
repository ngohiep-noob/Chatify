import axios from "axios";
import { User } from "../types/User";
import { getToken } from "../utils/token.utils";
import { SERVER_URL } from "./constant";

type GetAllUserResponse = {
  data: User[];
  message: string;
  status: string;
};

export const getUserInfor = async () => {
  const token = getToken();
  const response = await axios.get(`${SERVER_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const GetAllUsers = async () => {
  const response = await axios.get<GetAllUserResponse>(
    `${SERVER_URL}/users/find?name=`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};
