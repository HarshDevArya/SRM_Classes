import { Outlet } from "react-router-dom";

import NavBar from "../components/navbar";
export default function Layout() {
  return (
    <div className="bg-orange-50 ">
      <NavBar />
      <main className="max-w-7xl m-auto">
        <Outlet />
      </main>
    </div>
  );
}
