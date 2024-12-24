import ReactDOM from "react-dom/client";
import { RouteConfig, route } from "@react-router/dev/routes";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouteProvider router={router} />
);
