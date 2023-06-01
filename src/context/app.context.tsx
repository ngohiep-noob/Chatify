import React, { useMemo } from "react";
import { MenuItem } from "../types/Home";
import { useNavigate } from "react-router-dom";
import  { useState } from 'react';
import {Modal} from "antd";
export interface ContextValue {
  friendList?: MenuItem[];
  roomList?: MenuItem[];
  selectedItemId?: string;
  user?: {
    id: string ;
    name: string ;
    email: string ;
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
    roomList: [],
    selectedItemId: "",
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

  const SetContext: ContextAction = useMemo(
    () => (
      {
      
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
      setRoomList,
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
