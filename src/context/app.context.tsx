import React, { useMemo } from "react";
import { MenuItem } from "../types/Home";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { setToken } from "../utils/token.utils";
export interface ContextValue {
  friendList?: MenuItem[];
  roomList?: MenuItem[];
  selectedItemId?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface ContextAction {
  HandleLogout?: () => void;
  HandleAddFriend?: () => void;
  HandleAddGroup?: () => void;
  setFriendList?: (newUserList: MenuItem[]) => void;
  setRoomList?: (newGroupList: MenuItem[]) => void;
  setUserInfo?: (newUserInfo: ContextValue["user"]) => void;
  setSelectedItem?: (newSelectedItem: string) => void;
  showMessage?: (
    type: "success" | "error" | "warning",
    content: string
  ) => void;
  clearStore?: () => void;
}

export interface ContextProps {
  value?: ContextValue;
  action?: ContextAction;
}

export const AppContext = React.createContext<ContextProps>({});
interface AppProvider {
  children: React.ReactNode;
}

const defaultContextValue: ContextValue = {
  friendList: [],
  roomList: [],
  selectedItemId: "",
  user: {
    id: "",
    name: "",
    email: "",
  },
};

const AppProvider = ({ children }: AppProvider) => {
  const navigator = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [state, setState] = React.useState<ContextValue>(defaultContextValue);

  const setFriendList = (newUserList: MenuItem[]) => {
    setState((prevState) => ({
      ...prevState,
      friendList: newUserList,
    }));
  };

  const setRoomList = (newGroupList: MenuItem[]) => {
    setState((prevState) => ({
      ...prevState,
      roomList: newGroupList,
    }));
  };

  const setUserInfo = (newUserInfo: ContextValue["user"]) => {
    setState((prevState) => ({
      ...prevState,
      user: newUserInfo,
    }));
  };

  const setSelectedItem = (newSelectedItem: string) => {
    setState((prevState) => ({
      ...prevState,
      selectedItemId: newSelectedItem,
    }));
  };

  const showMessage = (
    type: "success" | "error" | "warning",
    content: string
  ) => {
    switch (type) {
      case "success":
        messageApi.success(content);
        break;
      case "error":
        messageApi.error(content);
        break;
      case "warning":
        messageApi.warning(content);
        break;
    }
  };

  const clearStore = () => {
    setState(defaultContextValue);
  };

  const SetContext: ContextAction = useMemo(
    () => ({
      HandleLogout: () => {
        setToken("");
        clearStore();
        navigator("/");
      },
      HandleAddFriend: () => {
        console.log("HandleAddFriend");
      },
      HandleAddGroup: () => {
        console.log("HandleAddGroup");
      },
      setFriendList,
      setRoomList,
      setUserInfo,
      setSelectedItem,
      showMessage,
      clearStore,
    }),
    []
  );

  return (
    <AppContext.Provider value={{ value: state, action: SetContext }}>
      {contextHolder}
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
