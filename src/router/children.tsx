import Chat from "../pages/Chat/Chat";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RouteProtector from "./RouterProtector";

export const HOME = {
  id: crypto.randomUUID(),
  path: "",
  to: "/",
  display: "Inicio",
  element: <Home />,
};

export const REGISTER = {
  id: crypto.randomUUID(),
  path: "registro",
  to: "/registro",
  display: "Registro",
  element: <Register />,
};

export const LOGIN = {
  id: crypto.randomUUID(),
  path: "login",
  to: "/login",
  display: "Login",
  element: <Login />,
};

export const CHAT = {
  id: crypto.randomUUID(),
  path: "chat",
  to: "/chat",
  display: "Chat",
  element: (
    <RouteProtector>
      <Chat />
    </RouteProtector>
  ),
};
