import { getUser, loginUser } from "@/services/user-service";

export const setTokenLocalStorage = (token: string) => {
  localStorage.setItem("t", token);
};

export const getTokenLocalStorage = () => {
  return localStorage.getItem("t");
};

export const authenticateUser = async (data: {
  email: string;
  password: string;
}) => {
  const response = await loginUser(data);

  if (response) {
    setTokenLocalStorage(response.token);
    const user = await getUser();
    return user;
  }
};
