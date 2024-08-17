import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  username: z.string().min(3).max(24),
  email: z.string().email(),
  password: z.string().min(8).max(24),
  avatar: z.string().optional(),
});

type RegisterSchema = z.infer<typeof registerSchema>;

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
