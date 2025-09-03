import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import About from "./pages/About";
import Login from "./pages/Login";

import { AppProvider } from "./context/AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppProvider>
        <Layout />
      </AppProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contactus />,
      },
      {
        path: "about",
        element: <About />,
      },
      // dynamic Routing
      {
        path: "productdetail/:id",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
