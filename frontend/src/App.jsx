import { RouterProvider } from "react-router-dom";
import NetflixCloneRouter from "./routes";
import "./assets/css/style.css";
import { useAuthStore } from "./store";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { Footer } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  const { isCheckingAuth, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={NetflixCloneRouter} />;
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
