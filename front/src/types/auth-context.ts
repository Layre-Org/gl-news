import React from "react";

export interface IUser {
  token?: string;
  username?: string;
  email?: string;
  password?: string;
  isWriter?: boolean;
  avatar?: string;
}

export interface IAuthContext extends IUser {
  authenticate: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export interface IAuthProviderProps {
  children: React.ReactNode;
}
