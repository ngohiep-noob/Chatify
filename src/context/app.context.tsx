import React, { useMemo } from "react";
import { MenuItem } from "../types/Home";
import { useNavigate } from "react-router-dom";

export interface ContextValue {
  friendList?: MenuItem[];
  groupList?: MenuItem[];
  selectedItem?: string;
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
  setGroupList?: (newGroupList: MenuItem[]) => void;
  setUserInfo?: (newUserInfo: ContextValue["user"]) => void;
  setSelectedItem?: (newSelectedItem: string) => void;
}

export interface ContextProps {
  value?: ContextValue;
  action?: ContextAction;
}

export const AppContext = React.createContext<ContextProps>({});
interface AppProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProvider) => {
  const navigator = useNavigate();

  const [state, setState] = React.useState<ContextValue>({
    friendList: [],
    groupList: [],
    selectedItem: "",
    user: {
      id: "1",
      name: "Ngo Hiep",
      email: "ngohiep@deptrai.vcl",
    },
  });

  const setFriendList = (newUserList: MenuItem[]) => {
    setState((prevState) => ({
      ...prevState,
      friendList: newUserList,
    }));
  };

  const setGroupList = (newGroupList: MenuItem[]) => {
    setState((prevState) => ({
      ...prevState,
      groupList: newGroupList,
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
      selectedItem: newSelectedItem,
    }));
  };

  const SetContext = useMemo(
    () => ({
      HandleLogout: () => {
        localStorage.removeItem("token");
        navigator("/");
      },
      HandleAddFriend: () => {
        console.log("HandleAddFriend");
      },
      HandleAddGroup: () => {
        console.log("HandleAddGroup");
      },
      setFriendList,
      setGroupList,
      setUserInfo,
      setSelectedItem,
    }),
    []
  );

  return (
    <AppContext.Provider value={{ value: state, action: SetContext }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
