import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useRequireAuth = () => {
  const { user } = useAuth(); // Replace `user` with your actual user state key
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirect to the home page if no user is logged in
      navigate("/login");
    }
  }, [user, navigate]);
};

export default useRequireAuth;
