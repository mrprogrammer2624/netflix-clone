import { NTInput } from "@/components";
import { useAuthStore } from "@/store";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoggingIn } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <h1 className="text-center text-white text-2xl font-bold mb-4">Login</h1>

      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <NTInput
            type="email"
            label={"Email"}
            placeholder="you@example.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <NTInput
            type="password"
            label={"Password"}
            placeholder="••••••••"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-md
							hover:bg-red-700
						"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? "Loading..." : "Login"}
        </button>
      </form>
      <div className="text-center text-gray-400">
        Don&#39;t have an account?
        <Link to={"/signup"} className="text-red-500 hover:underline">
          Sign Up
        </Link>
      </div>
    </>
  );
};
