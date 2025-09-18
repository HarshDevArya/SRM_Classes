import { useState } from "react";
import { signupUser } from "../services/signupService";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleName = function (e) {
    e.preventDefault();
    const nameValue = e.target.value;
    setName(nameValue);
  };

  const handleEmail = function (e) {
    e.preventDefault();
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const handlePassword = function (e) {
    e.preventDefault();
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  const handleConfirmPassword = function (e) {
    e.preventDefault();
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name Required");
      return;
    }
    if (!email.trim()) {
      setError("Email Required");
      return;
    }
    if (!password.trim()) {
      setError("password Required");
      return;
    }
    if (password !== confirmPassword) {
      setError("confirmPassword must be same");
      return;
    }
    try {
      setLoading(true);
      const data = await signupUser(name, email, password);
      console.log(data);
    } catch (error) {
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
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join our community today
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-black">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleName}
                  autoComplete="name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 outline-indigo-500 sm:text-sm/6"
                  placeholder="Enter your full name"
                />
              </div>
              {error && <p className="text-red-600">{error}</p>}
            </div>

            {/* Email Field */}
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
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 outline-indigo-500 sm:text-sm/6"
                  placeholder="Enter your email"
                />
              </div>
              {error && <p className="text-red-600">{error}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-black">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 outline-indigo-500 sm:text-sm/6"
                  placeholder="Create a password"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 6 characters long
              </p>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm/6 font-medium text-black">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 outline-indigo-500 sm:text-sm/6"
                  placeholder="Confirm your password"
                />
              </div>
              {error && <p className="text-red-600">{error}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 outline-indigo-500"
                disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Already have an account?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
