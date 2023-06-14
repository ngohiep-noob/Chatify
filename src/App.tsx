import { useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import ChatBox from "./pages/ChatBox";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/Auth/SignUp";
import AppProvider from "./context/app.context";
import AuthLayout from "./pages/Auth/Layout";
import RoomList from "./pages/Home/RoomList";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/signUp",
      element: (
        <AuthLayout>
          <SignUp />
        </AuthLayout>
      ),
    },
    {
      path: "/chat-box/:id",
      element: <ChatBox />,
    },
    {
      path: "/room-list",
      element: <RoomList />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <AppProvider>{routes}</AppProvider>
    </>
  );
}

export default App;
