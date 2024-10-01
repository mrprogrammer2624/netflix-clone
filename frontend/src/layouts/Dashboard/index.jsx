import { Logo } from "@/assets/images";
import { Navbar } from "@/components";
import { useAuthStore } from "@/store";
import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  const { user } = useAuthStore();
  return (
    <div className="bg-black text-white min-h-screen">
      {user && <Navbar />}

      <Outlet />
    </div>
  );
};
