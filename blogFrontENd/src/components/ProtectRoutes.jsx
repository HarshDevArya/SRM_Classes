import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectRoute({ children }) {
  const { user, loading } = useAuth();
  console.log(user, loading);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Render protected content if authenticated
  return children;
}
