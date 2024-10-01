import { NTInput } from "@/components";
import { useAuthStore } from "@/store";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const { searchParams } = new URL(document.location);
  const emailValue = searchParams.get("email");

  const [email, setEmail] = useState(emailValue || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isSigningUp } = useAuthStore();

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({ email, username, password });
  };

  return (
    <>
      <h1 className="text-center text-white text-2xl font-bold mb-4">
        Sign Up
      </h1>

      <form className="space-y-4" onSubmit={handleSignUp}>
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
            type="text"
            label={"Username"}
            placeholder="johndoe"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <NTInput
            type="password"
            label="Password"
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
          disabled={isSigningUp}
        >
          {isSigningUp ? "Loading..." : "Sign Up"}
        </button>
      </form>

      <div className="text-center text-gray-400">
        Already a member?{" "}
        <Link to={"/login"} className="text-red-500 hover:underline">
          Sign in
        </Link>
      </div>
    </>
  );
};
