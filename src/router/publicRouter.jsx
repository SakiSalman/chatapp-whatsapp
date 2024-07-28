import Chat from "../pages/Chat/Chat";
import Activation from "../pages/auth/Activation";
import Forgot from "../pages/auth/Forgot";
import Login from "../pages/auth/Login";
import TokenActivation from "../pages/auth/TokenActivation";
import PublicGard from "./PublicGard";

// create public router
const publicRouter = [
  {
    element : <PublicGard/>,
    children : [
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      {
        path: "/activation/:token",
        element: <TokenActivation />,
      },
      {
        path: "/activation",
        element: <Activation />,
      },
    ]
  }
];

// export router
export default publicRouter;
