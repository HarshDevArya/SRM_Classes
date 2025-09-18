import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/loginService";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const handleEmail = function (e) {
    e.preventDefault();
    console.log(e.target.value);
    const emailValue = e.target.value;
    if (!emailValue) console.log("error");
    setEmail(emailValue);
  };
  const handlePassword = function (e) {
    e.preventDefault();
    console.log(e.target.value);
    const setPasswords = e.target.value;
    if (!setPasswords) console.log("error");
    setPassword(setPasswords);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await loginUser(email, Password);
      console.log(data);
      setUser(data.user);
      navigation("/dasboard");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-black">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1  placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-black">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={Password}
                  onChange={handlePassword}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1  placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 outline-indigo-500"
                disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
              {error && <p className="text-red-600">{error}</p>}
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-400 hover:text-indigo-300">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
