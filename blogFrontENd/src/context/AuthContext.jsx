import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fatchData = async () => {
      try {
        const baseurl = import.meta.env.VITE_Base_URL;
        const response = await fetch(`${baseurl}/api/auth/me`, {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Not Authenticate");
        }
        const data = await response.json();
        console.log(data);
        setUser(data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fatchData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
