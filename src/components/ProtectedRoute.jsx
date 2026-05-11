import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users/me", {
          withCredentials: true,
        });
        setIsAuth(true);
        console.log("CheckAuth: ", res.data);
      } catch (err) {
        console.log(err);
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);
  if (loading) return <p> Loading</p>;
  if (!isAuth) return <Navigate to="/signin" />;
  return children;
}

export default ProtectedRoute;
