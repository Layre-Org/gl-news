import ProtectedLayout from "@/components/protected-layout";
import { useAuth } from "@/context/AuthContext/useAuth";

function Profile() {
  const auth = useAuth();

  return (
    <ProtectedLayout>
      <div className=" p-4 flex flex-col gap-4">
        {auth.username}
        {auth.email}
      </div>
    </ProtectedLayout>
  );
}

export default Profile;
