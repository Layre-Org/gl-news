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
import { useRegister } from "@/hooks/useRegister";

function RegisterDialog() {
  const { register, errors, onSubmit } = useRegister();
  console.log(errors);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-semibold">
          Register
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>Create your account</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              {...register("username")}
              id="username"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
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

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="avatar" className="text-right">
              Avatar
            </Label>
            <Input {...register("avatar")} id="avatar" className="col-span-3" />
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

export default RegisterDialog;
