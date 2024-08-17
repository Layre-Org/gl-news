import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Header() {
  return (
    <header className="flex justify-center border-b border-secondary">
      <nav className="flex justify-between w-full max-w-5xl p-4 items-center">
        <h1 className="font-bold uppercase text-xl">GL News</h1>
        <Input type="text" placeholder="Search..." className="w-auto" />
        <div className="flex gap-4">
          <Button variant="outline" className="font-semibold">
            Register
          </Button>
          <Button className="font-semibold">Login</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
