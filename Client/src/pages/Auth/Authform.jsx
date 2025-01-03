import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "admin@gmail.com" && password.trim() === "12345") {
      navigate("/sale");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="max-w-md mx-auto bg-slate-200 p-6 rounded-md shadow-md mt-28">
      <h1 className="text-3xl font-bold text-center mb-6">
        {isLogin ? "Login" : "Register"}
      </h1>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded-md"
            required
          />
        </div>
        {!isLogin && (
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="mb-2 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border p-2 rounded-md"
              required
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <div className="mt-4 text-center">
        {!isLogin ? (
          <p>
            Already have an account?{" "}
            <button onClick={handleFormToggle}>
              <span className="text-red-600 underline">Login</span>
            </button>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <button onClick={handleFormToggle}>
              <span className="text-red-600 underline">Register</span>
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
