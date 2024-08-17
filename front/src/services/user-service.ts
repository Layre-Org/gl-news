/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "@/api";
import { LoginSchema } from "@/hooks/useLogin";
import { RegisterSchema } from "@/hooks/useRegister";

export const createUser = async (data: RegisterSchema) => {
  try {
    const response = await api.post("/user", data);
    return response.data;
  } catch (error) {
    console.log("mostra um errinho na tela meu mano");
  }
};

export const loginUser = async (data: LoginSchema) => {
  try {
    const response = await api.post("/auth", data);
    return response.data;
  } catch (error) {
    console.log("mostra um errinho na tela meu mano");
  }
};

export const getUser = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error) {
    console.log("mostra um errinho na tela meu mano");
  }
};
