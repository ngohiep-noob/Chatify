import axios from "axios";
import { getToken } from "../utils/token.utils";
import { RoomChat } from "../types/Chat";

export type GetChatHistoryRes = {
  data: RoomChat;
  message: string;
  status: string;
};

export const GetChatHistory = async (id: string | undefined) => {
  // const token = localStorage.getItem("token");
  if (!id) return Promise.reject("id is undefined");
  
  const token = getToken();

  const response = await axios.get<GetChatHistoryRes>(
    `http://localhost:8888/room/chat-history/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
