export const loginUser = async (email, password) => {
  const baseurl = import.meta.env.VITE_Base_URL;
  const responce = await fetch(`${baseurl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  console.log(responce);
  if (!responce.ok) {
    throw new Error("Login failed");
  }
  return responce.json();
};
