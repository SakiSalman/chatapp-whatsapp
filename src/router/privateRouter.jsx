import Chat from "../pages/Chat/Chat";
import PrivateGard from "./PrivateGard";

// create Private router
const privateRouter = [
  {
    element : <PrivateGard/>,
    children : [
      {
        path: "/",
        element: <Chat />
      },
    ]
  }
]

// export router
export default privateRouter;
