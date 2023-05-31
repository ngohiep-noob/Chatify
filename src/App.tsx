import { useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/Auth/SignUp";
import AppProvider from "./context/app.context";
import AuthLayout from "./pages/Auth/Layout";
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
      path: "/home",
      element: <Home />,
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
