import { Link } from "react-router-dom";
import LoginDialog from "./login-dialog";
import RegisterDialog from "./register-dialog";
import { Input } from "./ui/input";
import { useAuth } from "@/context/AuthContext/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getNameInitials } from "@/util/getNameInitials";

function Header() {
  const auth = useAuth();

  return (
    <header className="flex justify-center border-b border-secondary">
      <nav className="flex justify-between w-full max-w-5xl p-4 items-center">
        <Link to="/">
          <h1 className="font-bold uppercase text-xl">GL News</h1>
        </Link>
        <Input type="text" placeholder="Search..." className="w-auto" />
        {!auth.email ? (
          <div className="flex gap-4">
            <RegisterDialog />
            <LoginDialog />
          </div>
        ) : (
          <Link to="/profile">
            <Avatar>
              <AvatarImage src={auth.avatar} alt="avatar image" />
              <AvatarFallback>
                {getNameInitials(auth.username || "")}
              </AvatarFallback>
            </Avatar>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
