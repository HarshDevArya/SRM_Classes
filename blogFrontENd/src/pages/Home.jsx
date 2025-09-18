import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect;
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_Base_URL}/api/projects`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div className=" bg-linear-to-r from-[#4f46e5] to-[#9333ea]  px-7 py-10 rounded-4xl my-10">
        <h1 className="text-3xl font-bold mb-3 text-white">
          Discover and showcase amazing creative work
        </h1>
        <p className="text-lg mb-10 text-white ">
          Join our community of creators to share your portfolio and get
          inspired.
        </p>
        <Link
          to="login"
          className="bg-white p-2 border-1 border-amber-100 rounded-xl text-blue-700">
          Share Your Project
        </Link>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-3 text-black">Latest Blogs</h1>
        <div className="bg-white p-4 rounded-xl flex justify-between gap-4">
          <Card blogs={blogs} loading={loading} />
        </div>
      </div>
    </>
  );
}
