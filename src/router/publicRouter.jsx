import Chat from "../pages/Chat/Chat";
import Activation from "../pages/auth/Activation";
import Forgot from "../pages/auth/Forgot";
import Login from "../pages/auth/Login";

// create public router
const publicRouter = [
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
    path: "/activation",
    element: <Activation />,
  },
];

// export router
export default publicRouter;
