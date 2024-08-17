import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext/useAuth";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(24),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const useLogin = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    await auth.authenticate(data);
    navigate("/profile");
  };

  return {
    register,
    errors: formState.errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
