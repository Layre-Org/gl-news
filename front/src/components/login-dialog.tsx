import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useLogin } from "@/hooks/useLogin";

function LoginDialog() {
  const { register, errors, onSubmit } = useLogin();
  console.log(errors);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-semibold">Login</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Login in your account</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              {...register("email")}
              type="email"
              id="email"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={onSubmit} type="submit">
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
