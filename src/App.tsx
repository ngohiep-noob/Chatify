import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

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
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <>{routes}</>;
}

export default App;
