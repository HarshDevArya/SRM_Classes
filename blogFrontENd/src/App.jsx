import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import ProjectDetail from "./pages/ProjectDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dasboard from "./pages/Dasboard";
// import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectRoute from "./components/ProtectRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
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
      // dynamic Routing
      {
        path: "projectdetail/:id",
        element: <ProjectDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dasboard",
        element: (
          <ProtectRoute>
            <Dasboard />
          </ProtectRoute>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
