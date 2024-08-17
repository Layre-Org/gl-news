import { useAuth } from "@/context/AuthContext/useAuth";
import { Navigate } from "react-router-dom";

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  if (!auth.email) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
}

export default ProtectedLayout;
