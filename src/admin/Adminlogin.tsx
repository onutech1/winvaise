import { useState, FormEvent } from "react";
import { useLocation } from "wouter";

export default function AdminLogin() {
  const [, navigate] = useLocation();

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const ADMIN_CODE = "WINVAISE2026";

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (code === ADMIN_CODE) {
      localStorage.setItem("admin-auth", "true");
      navigate("/admin");
    } else {
      setError("Invalid admin code");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md rounded-3xl p-8">
        <h1 className="text-3xl font-bold mb-2">Admin Access</h1>

        <p className="text-gray-500 mb-6">Enter admin security code</p>

        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter access code"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl px-4 py-4 outline-none mb-4"
          />

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 transition text-black font-semibold py-4 rounded-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
