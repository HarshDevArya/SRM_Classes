export const signupUser = async (name, email, password) => {
  const baseurl = import.meta.env.VITE_Base_URL;
  const response = await fetch(`${baseurl}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      name,
      email: email.toLowerCase(),
      password,
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Signup Fails");
  }
  return data;
};
