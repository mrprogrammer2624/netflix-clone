import { useAuthStore } from "@/store";
import { WithAuth } from "./WithAuth";
import { WithoutAuth } from "./WithoutAuth";

export const Home = () => {
  const { user } = useAuthStore();

  return <>{user ? <WithAuth /> : <WithoutAuth />}</>;
};
