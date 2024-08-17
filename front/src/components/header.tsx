import { Link } from "react-router-dom";
import LoginDialog from "./login-dialog";
import RegisterDialog from "./register-dialog";
import { Input } from "./ui/input";

function Header() {
  return (
    <header className="flex justify-center border-b border-secondary">
      <nav className="flex justify-between w-full max-w-5xl p-4 items-center">
        <Link to="/profile">
          <h1 className="font-bold uppercase text-xl">GL News</h1>
        </Link>
        <Input type="text" placeholder="Search..." className="w-auto" />
        <div className="flex gap-4">
          <RegisterDialog />
          <LoginDialog />
        </div>
      </nav>
    </header>
  );
}

export default Header;
