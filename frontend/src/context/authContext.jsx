import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const authentication = async () => {
      try {
        const response = await fetch("http://localhost:3700/api/user-stat", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          setUser(data.userid);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    authentication();
  }, []);

  const signup = async (userData) => {
    try {
      console.log("userdata:", userData);
      const response = await fetch("http://localhost:3700/api/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) throw data;
      else {
        setUser(data.userid);
        return { message: data.message, success: data.success };
      }
    } catch (error) {
      return { success: false, ...error };
    }
  };

  const value = { user, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
