import { IAuthContext, IAuthProviderProps, IUser } from "@/types/auth-context";
import { createContext, useEffect, useState } from "react";
import { authenticateUser, getTokenLocalStorage } from "./util";
import { getUser } from "@/services/user-service";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const authenticate = async (data: { email: string; password: string }) => {
    const userData = await authenticateUser(data);
    setUser(userData);
  };

  const logout = () => {};

  useEffect(() => {
    if (getTokenLocalStorage()) {
      getUser().then((user) => setUser(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
