import axios from "axios";
import { setToken } from "../utils/token.utils";
import { SERVER_URL } from "./constant";

export type UserCredentials = {
  username: string;
  password: string;
  email?: string;
  fullname?: string;
};

export const LoginAPI = async (credentials: UserCredentials) => {
  const response = await axios.post(`${SERVER_URL}/auth/login`, credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const token = response.data.token;
  setToken(token);
};

export const RegisterAPI = async (credentials: UserCredentials) => {
  const response = await axios.post(
    `${SERVER_URL}/auth/register`,
    credentials,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const token = response.data.token;
  setToken(token);
};
