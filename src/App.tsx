import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Chatroom/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/Login/SignUp";
function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <>{routes}</>;
}

export default App;
